import { useParams, Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useRootContext } from '../../provider/RootProvider.tsx';
import { PokemonListProvider } from '../../provider/PokemonListProvider.tsx';
import { SearchProvider } from '../../provider/SearchProvider.tsx';

import Loader from '../Ui/Loader.tsx';
import Search from '../Search/Search.tsx';
import {
  PokemonInformation,
  PokemonList,
  PokemonShortInformation,
} from '../../interfaces/Pokemon.ts';
import clearImageUrl from '../../helper/clearImageUrl.tsx';

import styles from './PokemonsList.module.css';

function PokemonsList() {
  const { page } = useParams();
  const navigate = useNavigate();

  const { setCurrentPage, setIsFirstPage, setIsLastPage } = useRootContext();
  const { setIsPagerShow, currentLimit } = useRootContext();

  const prevPageState = useRef<string | undefined>('');
  const prevLimitState = useRef<number>(currentLimit);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchRequest, setSearchRequest] = useState<string>(localStorage.getItem('request') || '');
  const [pokemonList, setPokemonList] = useState<PokemonInformation[] | []>([]);

  const showPokemon = () => {
    navigate(`/page/${page}/pokemon/${searchRequest}`, { replace: true });
  };

  const closePokemon = () => {
    navigate(`/page/${page}`, { replace: true });
  };

  const updateSearchRequest = (value: string): void => {
    setSearchRequest(value);
    if (!value) closePokemon();
  };

  useEffect(() => {
    const afterChangeLimit = () => {
      setCurrentPage(1);
      navigate('/page/1', { replace: true });
      setPokemonList([]);
    };

    const getPageOrder = (previous: string | null, next: string | null) => {
      if (!previous) {
        setIsFirstPage(true);
      } else {
        setIsFirstPage(false);
      }

      if (!next) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
    };

    if (page) {
      setCurrentPage(+page);
    }

    localStorage.setItem('request', searchRequest);

    if (prevPageState.current !== page || prevLimitState.current !== currentLimit) {
      const calc: number | string | undefined = page && currentLimit * +page - currentLimit;
      const offset: number | string | undefined =
        prevLimitState.current !== currentLimit ? 0 : calc;
      const arrayOfPromises: Promise<PokemonInformation>[] = [];

      if (prevLimitState.current !== currentLimit) afterChangeLimit();

      setIsLoading(true);

      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${currentLimit}`)
        .then((response): Promise<PokemonList> => response.json())
        .then((json: PokemonList): void => {
          getPageOrder(json.previous, json.next);

          json.results.forEach((item: PokemonShortInformation) => {
            arrayOfPromises.push(fetch(item.url).then((resp) => resp.json()));
          });

          // Get all pokemon information
          Promise.all(arrayOfPromises).then((results) => {
            results.forEach((pokemon: PokemonInformation) => {
              setPokemonList((previous) => {
                const array = previous.length < currentLimit ? previous : previous.slice(1);
                const sprites = pokemon.sprites?.other?.['official-artwork']?.front_default;

                return [
                  ...array,
                  {
                    id: pokemon.id,
                    name: pokemon.name,
                    abilities: pokemon.abilities,
                    image: clearImageUrl(sprites),
                    stats: pokemon.stats,
                    types: pokemon.types,
                  },
                ];
              });
            });

            setIsLoading(false);
          });

          setIsPagerShow(true);
        });

      prevPageState.current = page;
      prevLimitState.current = currentLimit;
    }
  }, [
    page,
    currentLimit,
    searchRequest,
    navigate,
    setCurrentPage,
    setIsFirstPage,
    setIsLastPage,
    setIsPagerShow,
  ]);

  return (
    <PokemonListProvider value={{ isLoading, setIsLoading }}>
      <SearchProvider value={{ searchRequest, updateSearchRequest, showPokemon }}>
        <Search />

        <div className={styles.wrapper}>
          <div className={styles.list}>
            {pokemonList.map((item) => (
              <NavLink
                key={item.id}
                className={styles.pokemon}
                to={`/page/${page && page}/pokemon/${item.name}`}
                onClick={() => setSearchRequest(item.name)}
              >
                <img src={item.image} width="150" height="150" alt={item.name} />
                <h4 className={styles.title}>{item.name}</h4>
              </NavLink>
            ))}
          </div>

          <Outlet />
        </div>
      </SearchProvider>

      <Loader />
    </PokemonListProvider>
  );
}

export default PokemonsList;
