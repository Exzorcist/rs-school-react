import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  isErrorBoundary: boolean;
}

export interface ErrorBoundaryButtonProps {
  setIsErrorBoundary: (data: boolean) => void;
  isErrorBoundary: boolean;
}
