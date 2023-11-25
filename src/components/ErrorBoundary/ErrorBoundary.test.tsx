import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary.tsx';

// Mock the console.error function to suppress the error logs
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('{ ErrorBoundary } component', () => {
  it('render without error', () => {
    render(
      <ErrorBoundary>
        <div>Child component</div>
      </ErrorBoundary>
    );

    const childComponent = screen.getByText('Child component');
    expect(childComponent).toBeInTheDocument();
  });

  it('renders error message when an error occurs', () => {
    // Arrange
    const ErrorThrowingComponent = () => {
      throw new Error('Test Error');
    };

    // Act
    render(
      <ErrorBoundary>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );

    // Assert
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    expect(screen.getByText('ErrorBoundary is work!')).toBeInTheDocument();
    expect(
      screen.getByText(
        'You also can see error in the console and in the DevTools React Tab Component'
      )
    ).toBeInTheDocument();
  });
});
