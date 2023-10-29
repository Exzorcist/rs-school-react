import React from 'react';
import SearchErrorMessage from './SearchErrorMessage.tsx';
import SearchBox from './SearchBox.tsx';

import { PokemonInformation, PokemonShortInformation } from '../../interfaces/Pokemon.ts';
import { SearchProps } from '../../interfaces/Search.ts';

import styles from './Search.module.css';

class Search extends React.PureComponent<SearchProps> {
  state = {
    requestUrl: 'https://pokeapi.co/api/v2/pokemon/' as string,
    isErrorVisible: false as boolean,
    loadingDelay: 1500 as number,
  };

  hasMounted = false;

  componentDidMount() {
    if (!this.hasMounted) {
      this.hasMounted = true;
      const { setSearchRequest } = this.props;

      setSearchRequest(localStorage.getItem('last-request') || '', this.getPokemonData);
    }
  }

  // Change component state
  setIsErrorVisible = (data: boolean): void => {
    this.setState(() => ({ isErrorVisible: data }));
  };

  // Data acquisition and processing
  getPokemonData = () => {
    const { requestUrl } = this.state;
    const { setCurrentPokemon, setPokemonList } = this.props;
    const { setMode, searchRequset, setIsLoading } = this.props;

    // Start Loading
    setIsLoading(true);

    fetch(`${requestUrl}${searchRequset}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.results) {
          setMode('list');
          setPokemonList([]);
          this.getListOfPokemon(json.results);
        } else {
          setMode('current');
          this.getCurrentPokemon(json, setCurrentPokemon);
        }

        this.setIsErrorVisible(false);
      })
      .catch(() => {
        this.setIsErrorVisible(true);
        setIsLoading(false);
      });
  };

  // Get list of pokemons
  getListOfPokemon = (array: PokemonShortInformation[]): void => {
    const { loadingDelay } = this.state;
    const { setPokemonList, setIsLoading } = this.props;
    const arrayOfPromise: Promise<PokemonInformation>[] = [];

    // Create array of Promise
    array.forEach((item: PokemonShortInformation): void => {
      arrayOfPromise.push(fetch(item.url).then((resp) => resp.json()));
    });

    // Get all pokemon information
    Promise.all(arrayOfPromise).then((results: PokemonInformation[]): void => {
      results.forEach((pokemon: PokemonInformation): void => {
        this.getCurrentPokemon(pokemon, setPokemonList);
      });

      setTimeout((): void => setIsLoading(false), loadingDelay);
    });
  };

  // Get current pokemon
  getCurrentPokemon = (
    pokemon: PokemonInformation,
    callback: (pokemon: PokemonInformation) => void
  ): void => {
    const { loadingDelay } = this.state;
    const { setIsLoading } = this.props;

    callback(this.serializePokemonData(pokemon));
    setTimeout((): void => setIsLoading(false), loadingDelay);
  };

  // Data conversion
  serializePokemonData = (pokemon: PokemonInformation): PokemonInformation => {
    const sprites = pokemon.sprites?.other?.['official-artwork']?.front_default;

    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      image: sprites as string,
      stats: pokemon.stats,
      types: pokemon.types,
    };
  };

  render() {
    const { isErrorVisible } = this.state;
    const { searchRequset, setSearchRequest } = this.props;

    return (
      <div className={styles.search}>
        <h3 className={styles.title}>
          Use pokemon <span>Name</span> or <span>ID</span> for search
        </h3>

        <SearchBox
          searchRequset={searchRequset}
          setSearchRequest={setSearchRequest}
          getPokemonData={this.getPokemonData}
        />

        <SearchErrorMessage
          isErrorVisible={isErrorVisible}
          setIsErrorVisible={this.setIsErrorVisible}
        />
      </div>
    );
  }
}

export default Search;
