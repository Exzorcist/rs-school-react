import LoaderIcon from './LoaderIcon.tsx';
import { LoaderProps } from '../../interfaces/Ui.ts';
import styles from './Loader.module.css';

function Loader({ isLoading }: LoaderProps) {
  return (
    <div className={`${styles.loader} ${isLoading ? styles.show : ''}`}>
      <LoaderIcon />
      <h5 className={styles.title}>Loading. Please wait ...</h5>
    </div>
  );
}

export default Loader;
