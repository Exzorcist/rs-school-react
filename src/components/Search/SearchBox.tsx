import { SearchBoxProps } from '../../interfaces/Search.ts';
import styles from './SearchBox.module.css';

function SearchBox({ searchRequset, setSearchRequest, getPokemonData }: SearchBoxProps) {
  return (
    <div className={styles.box}>
      <input
        type="search"
        className={styles.input}
        placeholder="For example: charmeleon or 142"
        value={searchRequset}
        onInput={(e) => {
          setSearchRequest((e.target as HTMLInputElement).value.trim().toLocaleLowerCase());

          if (!(e.target as HTMLInputElement).value) {
            localStorage.setItem('last-request', '');
          }
        }}
      />

      <button type="button" className={styles.button} onClick={getPokemonData}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
