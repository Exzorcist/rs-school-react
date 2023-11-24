import Link from 'next/link';

import Select from './Select.tsx';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: string;
  next: string;
  prev: string;
  limit: string;
}

function Pagination({ page, next, prev, limit }: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <div className={styles.pager}>
        <Link href={prev} className={`${styles.prev} ${!prev ? styles.hidden : ''}`}>
          prev
        </Link>
        <span>{page}</span>
        <Link href={next} className={`${styles.next} ${!next ? styles.hidden : ''}`}>
          next
        </Link>
      </div>

      <Select limit={limit} />
    </div>
  );
}

export default Pagination;
