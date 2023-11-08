import { usePokemonListContext } from '../../provider/PokemonListProvider.tsx';
import LoaderIcon from './LoaderIcon.tsx';
import styles from './Loader.module.css';

function Loader() {
  const { isLoading } = usePokemonListContext();

  return (
    <div className={`${styles.loader} ${isLoading ? styles.show : ''}`}>
      <LoaderIcon />
      <h5 className={styles.title}>Loading. Please wait ...</h5>
    </div>
  );
}

export default Loader;
