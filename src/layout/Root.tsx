import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Information from '../components/Information/Information.tsx';
import Pagination from '../components/Ui/Pagination.tsx';
import styles from './Root.module.css';

function Root() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isPagerShow, setIsPagerShow] = useState(false);

  return (
    <div className={styles.main}>
      <Information />

      <div className={styles.wrapper}>
        <h2 className={styles.title}>Click to pokemon to see details.</h2>
        <Pagination
          page={currentPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          setCurrentLimit={setCurrentLimit}
          currentLimit={currentLimit}
          isPagerShow={isPagerShow}
        />
      </div>

      <section className={styles.box}>
        <div className={styles.screen}>
          <Outlet
            context={[setCurrentPage, setIsFirstPage, setIsLastPage, currentLimit, setIsPagerShow]}
          />
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
