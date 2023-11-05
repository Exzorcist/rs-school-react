import { Outlet } from 'react-router-dom';
import Information from '../components/Information/Information.tsx';
import styles from './Root.module.css';

function Root() {
  return (
    <div className={styles.main}>
      <Information />

      <h2 className={styles.title}>Click to pokemon to see details.</h2>
      <section className={styles.box}>
        <div className={styles.screen}>
          <Outlet />
        </div>

        <div className={styles.panel}>
          <span />
          <span />
          <span />
        </div>
      </section>
    </div>
  );
}

export default Root;
