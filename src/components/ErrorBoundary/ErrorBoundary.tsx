import { Component } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../interfaces/ErrorBoundary.ts';
import styles from './ErrorBoundary.module.css';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={styles.error}>
          <h2 className={styles.title}>Something went wrong!</h2>
          <h3 className={styles.subtitle}>ErrorBoundary is work!</h3>
          <h5 className={styles.message}>
            You also can see error in the console and in the DevTools React Tab Component
          </h5>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary; // Export the ErrorBoundary class
