import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('{ Pagination } component', () => {
  test('renders Pagination component with correct content and behavior', () => {
    const mockProps = {
      page: '2',
      next: '/page/3?limit=10',
      prev: '/page/1?limit=10',
      limit: '10',
    };

    render(
      <Pagination
        page={mockProps.page}
        next={mockProps.next}
        prev={mockProps.prev}
        limit={mockProps.limit}
      />
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('prev')).toBeInTheDocument();
    expect(screen.getByTestId('current-page')).toBeInTheDocument();
    expect(screen.getByTestId('next')).toBeInTheDocument();

    expect(screen.getByTestId('prev')).toHaveAttribute('href', '/page/1?limit=10');
    expect(screen.getByTestId('next')).toHaveAttribute('href', '/page/3?limit=10');

    fireEvent.click(screen.getByTestId('prev'));
    fireEvent.click(screen.getByTestId('next'));
  });

  test('renders Pagination if first page', () => {
    const mockProps = {
      page: '1',
      next: '/page/2?limit=10',
      prev: '',
      limit: '10',
    };

    render(
      <Pagination
        page={mockProps.page}
        next={mockProps.next}
        prev={mockProps.prev}
        limit={mockProps.limit}
      />
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('prev')).toBeInTheDocument();
    expect(screen.getByTestId('current-page')).toBeInTheDocument();
    expect(screen.getByTestId('next')).toBeInTheDocument();

    expect(screen.getByTestId('prev')).toHaveClass('hidden');
    expect(screen.getByTestId('next')).not.toHaveClass('hidden');
  });

  test('renders Pagination if last page', () => {
    const mockProps = {
      page: '60',
      next: '',
      prev: '/page/59?limit=10',
      limit: '10',
    };

    render(
      <Pagination
        page={mockProps.page}
        next={mockProps.next}
        prev={mockProps.prev}
        limit={mockProps.limit}
      />
    );

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('prev')).toBeInTheDocument();
    expect(screen.getByTestId('current-page')).toBeInTheDocument();
    expect(screen.getByTestId('next')).toBeInTheDocument();

    expect(screen.getByTestId('prev')).not.toHaveClass('hidden');
    expect(screen.getByTestId('next')).toHaveClass('hidden');
  });
});
