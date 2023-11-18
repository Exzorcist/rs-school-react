import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectCurrentPage,
  selectCurrentLimit,
  selectIsFirstPage,
  selectIsLastPage,
  selectIsPagerShow,
  setCurrentPage,
  setOffset,
} from '../../redux/reducers/PaginationSlice.ts';

import Select from './Select.tsx';
import styles from './Pagination.module.css';

function Pagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPage: number = useSelector(selectCurrentPage);
  const currentLimit: number = useSelector(selectCurrentLimit);
  const isFirstPage: boolean = useSelector(selectIsFirstPage);
  const isLastPage: boolean = useSelector(selectIsLastPage);
  const isPagerShow: boolean = useSelector(selectIsPagerShow);

  const showPage = (direction: string) => {
    dispatch(setCurrentPage(direction === 'next' ? +currentPage + 1 : currentPage - 1));
    navigate(`/page/${direction === 'next' ? +currentPage + 1 : currentPage - 1}`, {
      replace: true,
    });

    const offset: number = currentLimit * currentPage - currentLimit;
    dispatch(setOffset(offset));
  };

  return (
    <div className={styles.pagination}>
      {isPagerShow && (
        <div className={styles.pager}>
          <button
            type="button"
            className={`${styles.prev} ${isFirstPage ? styles.hidden : ''}`}
            onClick={() => showPage('prev')}
          >
            prev
          </button>
          <span>{currentPage}</span>
          <button
            type="button"
            className={`${styles.next} ${isLastPage ? styles.hidden : ''}`}
            onClick={() => showPage('next')}
          >
            next
          </button>
        </div>
      )}

      <Select />
    </div>
  );
}

export default Pagination;
