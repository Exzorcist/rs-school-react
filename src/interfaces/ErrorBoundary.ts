export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  isErrorBoundary: boolean;
}

export interface ErrorBoundaryButtonProps {
  setIsErrorBoundary: (data: boolean) => void;
  isErrorBoundary: boolean;
}
