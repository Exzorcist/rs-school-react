import { render, fireEvent, screen } from '@testing-library/react';
import ErrorBoundaryButton from './ErrorBoundaryButton.tsx';

describe('{ ErrorBoundaryButton } component', () => {
  it('{ ErrorBoundaryButton } render context', () => {
    const setIsErrorBoundaryMock = jest.fn();
    const isErrorBoundary = false;

    render(
      <ErrorBoundaryButton
        setIsErrorBoundary={setIsErrorBoundaryMock}
        isErrorBoundary={isErrorBoundary}
      />
    );

    const button = screen.getByText('Check ErrorBoundary');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(setIsErrorBoundaryMock).toHaveBeenCalledWith(true);
  });

  it('{ ErrorBoundaryButton } check reload state', () => {
    const setIsErrorBoundaryMock = jest.fn();
    const isErrorBoundary = true;

    // Mock window.location.reload
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    render(
      <ErrorBoundaryButton
        setIsErrorBoundary={setIsErrorBoundaryMock}
        isErrorBoundary={isErrorBoundary}
      />
    );

    const button = screen.getByText('Refresh page');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(window.location.reload).toHaveBeenCalled();
  });
});
