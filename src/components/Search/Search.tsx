import { useState, useEffect, useCallback, useRef } from 'react';
import SearchErrorMessage from './SearchErrorMessage.tsx';
import SearchBox from './SearchBox.tsx';

import { PokemonInformation, PokemonShortInformation } from '../../interfaces/Pokemon.ts';
import { SearchProps } from '../../interfaces/Search.ts';

import styles from './Search.module.css';

function Search(props: SearchProps) {
  const [requestUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
  const [loadingDelay] = useState<number>(1500);
  const [isErrorVisible, setIsErrorVisible] = useState<boolean>(false);

  const hasMounted = useRef(false);
  const prevSearchRequest = useRef<string>('');

  const { setPokemonList, setCurrentPokemon, setMode, searchRequset } = props;
  const { setSearchRequest, setIsLoading, isErrorBoundary } = props;

  if (isErrorBoundary) {
    throw new Error('Test message to check ErrorBoundary operation');
  }

  // Data conversion
  const serializePokemonData = useCallback((pokemon: PokemonInformation): PokemonInformation => {
    const sprites = pokemon.sprites?.other?.['official-artwork']?.front_default;

    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      image: sprites as string,
      stats: pokemon.stats,
      types: pokemon.types,
    };
  }, []);

  // Get current pokemon
  const getCurrentPokemon = useCallback(
    (pokemon: PokemonInformation, callback: (pokemon: PokemonInformation) => void): void => {
      callback(serializePokemonData(pokemon));
      setTimeout((): void => setIsLoading(false), loadingDelay);
    },
    [serializePokemonData, setIsLoading, loadingDelay]
  );

  // Get list of pokemons
  const getListOfPokemon = useCallback(
    (array: PokemonShortInformation[]): void => {
      const arrayOfPromise: Promise<PokemonInformation>[] = [];

      // Create array of Promise
      array.forEach((item: PokemonShortInformation): void => {
        arrayOfPromise.push(fetch(item.url).then((resp) => resp.json()));
      });

      // Get all pokemon information
      Promise.all(arrayOfPromise).then((results: PokemonInformation[]): void => {
        results.forEach((pokemon: PokemonInformation): void => {
          getCurrentPokemon(pokemon, setPokemonList);
        });

        setTimeout((): void => setIsLoading(false), loadingDelay);
      });
    },
    [getCurrentPokemon, setPokemonList, setIsLoading, loadingDelay]
  );

  // Data acquisition and processing
  const getPokemonData = useCallback(() => {
    localStorage.setItem('last-request', searchRequset);

    // Start Loading
    setIsLoading(true);

    fetch(`${requestUrl}${searchRequset}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemonList([]);

        if (json.results) {
          setMode('list');
          getListOfPokemon(json.results);
        } else {
          setMode('current');
          getCurrentPokemon(json, setCurrentPokemon);
        }

        setIsErrorVisible(false);
      })
      .catch(() => {
        setIsErrorVisible(true);
        setIsLoading(false);
        localStorage.setItem('last-request', '');
      });
  }, [
    requestUrl,
    searchRequset,
    setMode,
    setPokemonList,
    getListOfPokemon,
    getCurrentPokemon,
    setCurrentPokemon,
    setIsErrorVisible,
    setIsLoading,
  ]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      getPokemonData();
    }

    if (searchRequset === '' && prevSearchRequest.current !== '') {
      getPokemonData();
    }

    prevSearchRequest.current = searchRequset;
  }, [searchRequset, getPokemonData]);

  return (
    <div className={styles.search}>
      <div className={styles.ps}>
        <div>P.s. This API does not have the ability to query by partial match.</div>
        <div>
          You can check it here -{' '}
          <a href="https://pokeapi.co/docs/v2#pokemon" target="_blank" rel="noreferrer">
            https://pokeapi.co/docs/v2#pokemon
          </a>
        </div>
      </div>

      <h3 className={styles.title}>
        Use pokemon <span>Name</span> or <span>ID</span> for search
      </h3>

      <SearchBox
        searchRequset={searchRequset}
        setSearchRequest={setSearchRequest}
        getPokemonData={getPokemonData}
      />

      <SearchErrorMessage isErrorVisible={isErrorVisible} setIsErrorVisible={setIsErrorVisible} />
    </div>
  );
}

export default Search;
