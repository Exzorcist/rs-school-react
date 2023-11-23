import { useState } from 'react';

import Information from './Information/Information.tsx';
import Loader from './Ui/Loader.tsx';
import Pagination from './Ui/Pagination.tsx';
import ErrorBoundaryButton from './ErrorBoundary/ErrorBoundaryButton.tsx';

import styles from '../styles/MainLayout.module.css';

function MainLayout({ children }: { children: React.ReactNode }) {
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
            <div className={styles.screen}>{children}</div>

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

export default MainLayout;
