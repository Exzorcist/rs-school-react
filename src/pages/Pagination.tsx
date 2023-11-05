import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Pagination.module.css';

function Pagination({ page, isFirstPage, isLastPage }) {
  const [selectedFruit, setSelectedFruit] = useState('orange');

  return (
    <div className={styles.pagination}>
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

      <div className={styles.limit}>
        <select
          value={selectedFruit} // ...force the select's value to match the state variable...
          onChange={(e) => setSelectedFruit(e.target.value)} // ... and update the state variable on any change!
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
