import { NavLink } from 'react-router-dom';
import Select from './Select.tsx';
import { PaginationProps } from '../../interfaces/Ui.ts';
import styles from './Pagination.module.css';

function Pagination(props: PaginationProps) {
  const { page, isFirstPage, isLastPage, setCurrentLimit, currentLimit, isPagerShow } = props;

  return (
    <div className={styles.pagination}>
      {isPagerShow && (
        <div className={styles.pager}>
          <NavLink
            className={`${styles.prev} ${isFirstPage ? styles.hidden : ''}`}
            to={`/page/${page && +page - 1}`}
          >
            prev
          </NavLink>
          <span>{page}</span>
          <NavLink
            className={`${styles.next} ${isLastPage ? styles.hidden : ''}`}
            to={`/page/${page && +page + 1}`}
          >
            next
          </NavLink>
        </div>
      )}

      <Select currentLimit={currentLimit} setCurrentLimit={setCurrentLimit} />
    </div>
  );
}

export default Pagination;
