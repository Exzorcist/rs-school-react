import { SearchErrorProps } from '../../interfaces/Search.ts';
import styles from './SearchErrorMessage.module.css';

function SearchErrorMessage({ isErrorVisible, setIsErrorVisible }: SearchErrorProps) {
  return (
    <div className={`${styles.error} ${isErrorVisible ? styles.show : ''}`}>
      No such pokemon exists. Please check the name of your pokemon.
      <span
        role="button"
        tabIndex={0}
        className={styles.close}
        onClick={() => setIsErrorVisible(false)}
        onKeyPress={() => null}
      >
        +
      </span>
    </div>
  );
}

export default SearchErrorMessage;
