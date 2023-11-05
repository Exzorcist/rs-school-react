import { useParams, Outlet, useOutletContext, NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Loader from '../Ui/Loader.tsx';
import styles from './PokemonsList.module.css';

function PokemonsList() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [setCurrentPage, setIsFirstPage, setIsLastPage, currentLimit, setIsPagerShow] =
    useOutletContext();
  const prevPageState = useRef<string | undefined>('');
  const prevLimitState = useRef<number>(currentLimit);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDataGetting, setIsDataGetting] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage(page);

    if (prevPageState.current !== page || prevLimitState.current !== currentLimit) {
      let offset: number | string | undefined = page && currentLimit * +page - currentLimit;

      if (prevLimitState.current !== currentLimit) {
        setCurrentPage(1);
        offset = 0;
        navigate('/page/1', { replace: true });
        setPokemonList([]);
      }

      const arrayOfPromises = [];

      setIsLoading(true);

      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${currentLimit}`)
        .then((response) => response.json())
        .then((json) => {
          if (!json.previous) {
            setIsFirstPage(true);
          } else {
            setIsFirstPage(false);
          }

          if (!json.next) {
            setIsLastPage(true);
          } else {
            setIsLastPage(false);
          }

          json.results.forEach((item) => {
            arrayOfPromises.push(fetch(item.url).then((resp) => resp.json()));
          });

          // Get all pokemon information
          Promise.all(arrayOfPromises).then((results) => {
            results.forEach((pokemon) => {
              setPokemonList((previous) => {
                const array = previous.length < currentLimit ? previous : previous.slice(1);

                return [
                  ...array,
                  {
                    id: pokemon.id,
                    name: pokemon.name,
                    abilities: pokemon.abilities,
                    image: pokemon.sprites?.other?.['official-artwork']?.front_default,
                    stats: pokemon.stats,
                    types: pokemon.types,
                  },
                ];
              });
            });

            setIsLoading(false);
            setIsDataGetting(true);
          });

          setIsPagerShow(true);
        });

      prevPageState.current = page;
      prevLimitState.current = currentLimit;
    }
  }, [page, currentLimit, navigate, setCurrentPage, setIsFirstPage, setIsLastPage, setIsPagerShow]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {pokemonList.map((item) => (
            <NavLink
              key={item.id}
              className={styles.pokemon}
              to={`/page/${page && page}/pokemon/${item.name}`}
            >
              <img src={item.image} width="150" height="150" alt={item.name} />
              <h4 className={styles.title}>{item.name}</h4>
            </NavLink>
          ))}
        </div>

        <Outlet />
      </div>

      {isDataGetting}

      <Loader isLoading={isLoading} />
    </>
  );
}

export default PokemonsList;
