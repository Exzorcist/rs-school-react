import LoaderIcon from './LoaderIcon.tsx';
import { ILoaderProps } from '../../interfaces/Props.ts';
import styles from './Loader.module.css';

function Loader({ isLoading, setIsLoading }: ILoaderProps) {
  const delay: number = 1000;
  setTimeout((): void => setIsLoading(false), delay);

  return (
    <div className={`${styles.loader} ${isLoading ? styles.show : ''}`}>
      <LoaderIcon />
      <h5 className={styles.title}>Loading. Please wait ...</h5>
    </div>
  );
}

export default Loader;
