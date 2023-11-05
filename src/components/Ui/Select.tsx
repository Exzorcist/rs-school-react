import { useState } from 'react';
import { SelectProps } from '../../interfaces/Ui.ts';
import styles from './Select.module.css';

function Select(props: SelectProps) {
  const { currentLimit, setCurrentLimit } = props;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const arrayOfOptions: number[] = [10, 15, 20];

  return (
    <div>
      <div className={styles.select}>
        <div
          className={styles.placeholder}
          onClick={() => setShowDropdown(!showDropdown)}
          aria-hidden="true"
        >
          <span>{currentLimit}</span>
          <span>|</span>
          <span className={styles.arrow} />
        </div>

        <div className={`${styles.options} ${showDropdown ? styles.show : ''} `}>
          {arrayOfOptions.map((option) => (
            <span
              key={option}
              className={`${currentLimit === option ? styles.active : ''} `}
              onClick={() => {
                setCurrentLimit(option);
                setShowDropdown(false);
              }}
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
