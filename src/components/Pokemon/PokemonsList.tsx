import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PokemonAPI from '../../redux/services/PokemonService.ts';
import { setLoader } from '../../redux/reducers/LoaderSlice.ts';
import {
  selectCurrentPage,
  selectOffset,
  selectCurrentLimit,
  setCurrentPage,
  setOffset,
  setIsFirstPage,
  setIsLastPage,
} from '../../redux/reducers/PaginationSlice.ts';

import { PokemonList } from '../../interfaces/Pokemon.ts';
import PokemonListData from './PokemonListData.tsx';
import Search from '../Search/Search.tsx';

import styles from './PokemonsList.module.css';

function PokemonsList() {
  const delay: number = 4000;
  const dispatch = useDispatch();
  const { page } = useParams();

  const currentPage: number = useSelector(selectCurrentPage);
  const currentLimit: number = useSelector(selectCurrentLimit);
  const offset: number = useSelector(selectOffset);
  const limit: number = useSelector(selectCurrentLimit);

  const { data, isSuccess } = PokemonAPI.useGetPokemonListQuery({ offset, limit });

  useEffect(() => {
    dispatch(setCurrentPage(page));
    dispatch(setOffset(currentLimit * currentPage - currentLimit));

    if (!isSuccess) {
      dispatch(setLoader(true));
    }

    dispatch(setIsFirstPage(!data?.previous));
    dispatch(setIsLastPage(!data?.next));
  }, [dispatch, data, currentLimit, currentPage, isSuccess, page]);

  setTimeout(() => dispatch(setLoader(false)), delay);

  return (
    <>
      <Search />

      <div className={styles.wrapper}>
        <div className={styles.list}>
          {data &&
            (data as PokemonList).results.map((item) => (
              <PokemonListData name={item.name} key={item.name} />
            ))}
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default PokemonsList;
