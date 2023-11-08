import { NavLink } from 'react-router-dom';
import { useRootContext } from '../../provider/RootProvider.tsx';

import Select from './Select.tsx';
import styles from './Pagination.module.css';

function Pagination() {
  const { currentPage, isFirstPage, isLastPage, isPagerShow } = useRootContext();

  return (
    <div className={styles.pagination}>
      {isPagerShow && (
        <div className={styles.pager}>
          <NavLink
            className={`${styles.prev} ${isFirstPage ? styles.hidden : ''}`}
            to={`/page/${currentPage && +currentPage - 1}`}
          >
            prev
          </NavLink>
          <span>{currentPage}</span>
          <NavLink
            className={`${styles.next} ${isLastPage ? styles.hidden : ''}`}
            to={`/page/${currentPage && +currentPage + 1}`}
          >
            next
          </NavLink>
        </div>
      )}

      <Select />
    </div>
  );
}

export default Pagination;
