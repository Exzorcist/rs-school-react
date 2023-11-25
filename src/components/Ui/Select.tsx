import Link from 'next/link';
import { useState } from 'react';

import { ISelectProps } from '../../interfaces/Props.ts';
import styles from './Select.module.css';

function Select({ limit, setIsLoading }: ISelectProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const arrayOfOptions: number[] = [10, 15, 20];

  return (
    <div>
      <div className={styles.select}>
        <div
          className={styles.placeholder}
          onClick={() => setShowDropdown(!showDropdown)}
          role="button"
          aria-hidden="true"
        >
          <span>{limit}</span>
          <span>|</span>
          <span className={styles.arrow} />
        </div>

        <div
          className={`${styles.options} ${showDropdown ? styles.show : ''} `}
          data-testid="select-content"
        >
          {arrayOfOptions.map((option) => (
            <Link
              key={option}
              href={`/page/1?limit=${option}`}
              className={`${+limit === option ? styles.active : ''} `}
              onClick={() => {
                setShowDropdown(false);
                setIsLoading(true);
              }}
            >
              {option}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
