import React from 'react';
import { ErrorBoundaryButtonProps } from '../../interfaces/ErrorBoundary.ts';
import styles from './ErrorBoundaryButton.module.css';

class ErrorBoundaryButton extends React.PureComponent<ErrorBoundaryButtonProps> {
  render() {
    const { setIsErrorBoundary, isErrorBoundary } = this.props;

    return (
      <>
        {!isErrorBoundary && (
          <button
            type="button"
            className={styles.button}
            onClick={() => setIsErrorBoundary(!isErrorBoundary)}
          >
            Check ErrorBoundary
          </button>
        )}
        {isErrorBoundary && (
          <button type="button" className={styles.button} onClick={() => window.location.reload()}>
            Refresh page
          </button>
        )}
      </>
    );
  }
}

export default ErrorBoundaryButton;
