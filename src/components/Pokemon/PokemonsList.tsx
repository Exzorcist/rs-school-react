import { useParams, useOutlet, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Pagination from '../Ui/Pagination.tsx';
import Loader from '../Ui/Loader.tsx';
import styles from './PokemonsList.module.css';

function PokemonsList() {
  const { page } = useParams();
  const outlet = useOutlet();
  const prevPageState = useRef<string | undefined>('');
  const [pokemonList, setPokemonList] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDataGetting, setIsDataGetting] = useState<boolean>(false);

  useEffect(() => {
    if (prevPageState.current !== page) {
      const limit: number = 20;
      const offset: number | string | undefined = page && limit * +page - 20;
      const arrayOfPromises = [];

      setIsLoading(true);

      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}"`)
        .then((response) => response.json())
        .then((json) => {
          setPokemonList([]);

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
              setPokemonList((previous) => [
                ...previous,
                {
                  id: pokemon.id,
                  name: pokemon.name,
                  abilities: pokemon.abilities,
                  image: pokemon.sprites?.other?.['official-artwork']?.front_default,
                  stats: pokemon.stats,
                  types: pokemon.types,
                },
              ]);
            });

            setIsLoading(false);
            setIsDataGetting(true);
          });
        });

      prevPageState.current = page;
    }
  }, [page]);

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

        {outlet}
      </div>

      {isDataGetting && (
        <Pagination page={page} isFirstPage={isFirstPage} isLastPage={isLastPage} />
      )}

      <Loader isLoading={isLoading} />
    </>
  );
}

export default PokemonsList;
