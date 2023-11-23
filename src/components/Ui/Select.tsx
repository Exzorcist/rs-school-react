import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import {
//   selectCurrentLimit,
//   setCurrentLimit,
//   setCurrentPage,
//   setIsFirstPage,
// } from '../../redux/reducers/PaginationSlice.tsx';

import styles from './Select.module.css';

function Select() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const arrayOfOptions: number[] = [10, 15, 20];

  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const currentLimit: number = useSelector(selectCurrentLimit);
  const currentLimit: number = 10;

  const myClick = () => {
    // navigate(`/page/1`, { replace: true });
    // dispatch(setCurrentPage(1));
    // dispatch(setIsFirstPage(true));
    // dispatch(setCurrentLimit(option));
    setShowDropdown(false);
  };

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
              onClick={() => myClick}
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
