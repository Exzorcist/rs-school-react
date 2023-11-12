import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { RootProvider } from '../provider/RootProvider.tsx';
import Information from '../components/Information/Information.tsx';
import Pagination from '../components/Ui/Pagination.tsx';
import ErrorBoundaryButton from '../components/ErrorBoundary/ErrorBoundaryButton.tsx';

import styles from './Root.module.css';

function Root() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [isPagerShow, setIsPagerShow] = useState<boolean>(false);
  const [isErrorBoundary, setIsErrorBoundary] = useState<boolean>(false);

  if (isErrorBoundary) {
    throw new Error('Test message to check ErrorBoundary operation');
  } else {
    return (
      <RootProvider
        value={{
          currentPage,
          currentLimit,
          isFirstPage,
          isLastPage,
          isPagerShow,
          setIsFirstPage,
          setCurrentLimit,
          setCurrentPage,
          setIsLastPage,
          setIsPagerShow,
        }}
      >
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

        <ErrorBoundaryButton
          setIsErrorBoundary={setIsErrorBoundary}
          isErrorBoundary={isErrorBoundary}
        />
      </RootProvider>
    );
  }
}

export default Root;
