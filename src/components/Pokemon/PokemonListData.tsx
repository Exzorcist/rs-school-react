import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PokemonAPI from '../../redux/services/PokemonService.ts';
import { setList, selectList } from '../../redux/reducers/PokemonListSlice.ts';
import { setRequest } from '../../redux/reducers/SearchSlice.ts';
import clearImageUrl from '../../helper/clearImageUrl.tsx';

import styles from './PokemonListData.module.css';

interface IPokemonsListData {
  name: string;
}

function PokemonsListData({ name }: IPokemonsListData) {
  const dispatch = useDispatch();
  const listOfPokemons = useSelector(selectList);

  const { page } = useParams();
  const { data, isSuccess } = PokemonAPI.useGetPokemonDataQuery(name);

  if (!isSuccess) {
    return null;
  }

  const sprites = data.sprites?.other?.['official-artwork']?.front_default;
  const isNameUnique: boolean = listOfPokemons.every((obj) => obj.name !== data.name);

  if (isNameUnique) {
    requestIdleCallback(() => {
      dispatch(
        setList({
          id: data.id,
          name: data.name,
          abilities: data.abilities,
          image: clearImageUrl(sprites),
          stats: data.stats,
          types: data.types,
        })
      );
    });
  }

  return (
    <NavLink
      className={styles.pokemon}
      to={`/page/${page && page}/pokemon/${data.name}`}
      onClick={() => {
        dispatch(setRequest(data.name));
        localStorage.setItem('request', data.name);
      }}
    >
      <img src={clearImageUrl(sprites)} width="150" height="150" alt={data.name} />
      <h4 className={styles.title}>{data.name}</h4>
    </NavLink>
  );
}

export default PokemonsListData;
