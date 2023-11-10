import { useState } from 'react';
import { useRootContext } from '../../provider/RootProvider.tsx';
import styles from './Select.module.css';

function Select() {
  const { currentLimit, setCurrentLimit } = useRootContext();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const arrayOfOptions: number[] = [10, 15, 20];

  return (
    <div>
      <div className={styles.select}>
        <div
          className={styles.placeholder}
          onClick={() => setShowDropdown(!showDropdown)}
          role="button"
          data-testid="select-placeholder"
          aria-hidden="true"
        >
          <span>{currentLimit}</span>
          <span>|</span>
          <span className={styles.arrow} />
        </div>

        <div
          className={`${styles.options} ${showDropdown ? styles.show : ''} `}
          data-testid="select-content"
        >
          {arrayOfOptions.map((option) => (
            <span
              key={option}
              className={`${currentLimit === option ? styles.active : ''} `}
              onClick={() => {
                setCurrentLimit(option);
                setShowDropdown(false);
              }}
              role="button"
              data-testid={`select-item-${option}`}
              aria-hidden="true"
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
