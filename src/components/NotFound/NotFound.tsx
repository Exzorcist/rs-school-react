import styles from './NotFound.module.css';

function NotFound() {
  return (
    <h2 className={styles.title}>
      <div>Wrong path.</div>
      <div>Can&#39;t load data.</div>
    </h2>
  );
}

export default NotFound;
