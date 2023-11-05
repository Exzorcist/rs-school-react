import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import styles from './Pagination.module.css';

function Pagination({ page, isFirstPage, isLastPage, setCurrentLimit, currentLimit, isPagerShow }) {
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

      <div className={styles.limit}>
        <Select
          className={styles.select}
          placeholder={currentLimit}
          isSearchable={false}
          value={currentLimit}
          onChange={(e) => {
            setCurrentLimit(+e.value);
          }}
          options={[
            { value: '10', label: '10' },
            { value: '15', label: '15' },
            { value: '20', label: '20' },
          ]}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#e95793',
              primary50: '#e95793',
            },
          })}
        />
      </div>
    </div>
  );
}

export default Pagination;
