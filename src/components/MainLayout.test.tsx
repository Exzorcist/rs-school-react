import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';

describe('MainLayout Component', () => {
  test('renders MainLayout component with children', () => {
    const mockChildren = <div data-testid="mock-children">Mock Children</div>;

    render(<MainLayout>{mockChildren}</MainLayout>);

    const childrenElement = screen.getByTestId('mock-children');
    expect(childrenElement).toBeInTheDocument();
  });
});
