import { useSearchContext } from '../../provider/SearchProvider.tsx';
import styles from './Search.module.css';

function Search() {
  const { searchRequest, updateSearchRequest, showPokemon } = useSearchContext();

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
          onInput={(e) => {
            updateSearchRequest((e.target as HTMLInputElement).value.trim().toLocaleLowerCase());
          }}
        />

        <button type="button" className={styles.button} onClick={showPokemon}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
