import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setRequest, selectRequset } from '../../redux/reducers/SearchSlice.ts';
import { selectCurrentPage } from '../../redux/reducers/PaginationSlice.ts';
import styles from './Search.module.css';

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchRequest = useSelector(selectRequset);
  const currentPage = useSelector(selectCurrentPage);

  const inputChange = (e: FormEvent<HTMLInputElement>): void => {
    const request = (e.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    dispatch(setRequest(request));

    if (!request) navigate(`/page/${currentPage}`, { replace: true });
    localStorage.setItem('request', request);
  };

  const showDetails = () => {
    navigate(`/page/${currentPage}/pokemon/${searchRequest}`, { replace: true });
  };

  return (
    <div className={styles.search}>
      <h3 className={styles.title}>
        Use pokemon <span>Name</span> or <span>ID</span> for search
      </h3>

      <div className={styles.box}>
        <input
          type="search"
          className={styles.input}
          placeholder="For example: charmeleon or 142"
          value={searchRequest}
          onInput={(e: FormEvent<HTMLInputElement>) => inputChange(e)}
        />

        <button type="button" className={styles.button} onClick={() => showDetails()}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
