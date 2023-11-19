import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Information from '../components/Information/Information.tsx';
import Pagination from '../components/Ui/Pagination.tsx';
import Loader from '../components/Ui/Loader.tsx';
import ErrorBoundaryButton from '../components/ErrorBoundary/ErrorBoundaryButton.tsx';

import styles from './Root.module.css';

function Root() {
  const [isErrorBoundary, setIsErrorBoundary] = useState<boolean>(false);

  if (isErrorBoundary) {
    throw new Error('Test message to check ErrorBoundary operation');
  } else {
    return (
      <>
        <div className={styles.main}>
          <Information />

          <div className={styles.wrapper}>
            <h2 className={styles.title}>Click to pokemon to see details.</h2>
            <Pagination />
          </div>

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

        <Loader />

        <ErrorBoundaryButton
          setIsErrorBoundary={setIsErrorBoundary}
          isErrorBoundary={isErrorBoundary}
        />
      </>
    );
  }
}

export default Root;
