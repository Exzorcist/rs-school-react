import { render, screen } from '@testing-library/react';
import RootLayout from './RootLayout';

describe('{ RootLayout } component', () => {
  test('renders RootLayout component with head content', () => {
    const mockChildren = <div data-testid="mock-children">Mock Children</div>;

    render(<RootLayout>{mockChildren}</RootLayout>);

    const childrenElement = screen.getByTestId('mock-children');
    expect(childrenElement).toBeInTheDocument();
  });
});
