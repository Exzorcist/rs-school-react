import { useState } from 'react';

import Information from './Information/Information.tsx';
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
          {children}
        </div>

        <ErrorBoundaryButton
          setIsErrorBoundary={setIsErrorBoundary}
          isErrorBoundary={isErrorBoundary}
        />
      </>
    );
  }
}

export default MainLayout;
