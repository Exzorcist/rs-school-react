import Link from 'next/link';
import { useState } from 'react';

import Select from './Select.tsx';
import Loader from './Loader.tsx';

import { IPaginationProps } from '../../interfaces/Props.ts';
import styles from './Pagination.module.css';

function Pagination({ page, next, prev, limit }: IPaginationProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className={styles.pagination} data-testid="pagination">
      <div className={styles.pager}>
        <Link
          href={prev}
          data-testid="prev"
          className={`${styles.prev} ${!prev ? styles.hidden : ''}`}
          onClick={() => setIsLoading(true)}
        >
          prev
        </Link>
        <span data-testid="current-page">{page}</span>
        <Link
          href={next}
          data-testid="next"
          className={`${styles.next} ${!next ? styles.hidden : ''}`}
          onClick={() => setIsLoading(true)}
        >
          next
        </Link>
      </div>

      <Select limit={limit} setIsLoading={setIsLoading} />

      <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
}

export default Pagination;
