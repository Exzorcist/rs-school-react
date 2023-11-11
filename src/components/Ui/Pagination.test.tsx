import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useRootContext } from '../../provider/RootProvider.tsx';
import Pagination from './Pagination';

const mockedUseRootContext = useRootContext as jest.Mock;

const paginationRender = () => {
  // Set the mock values for the context
  jest.mock('../../provider/RootProvider.tsx', () => ({
    ...jest.requireActual('../../provider/RootProvider.tsx'),
    useRootContext: jest.fn(() => mockedUseRootContext),
  }));

  render(
    <MemoryRouter>
      <Pagination />
    </MemoryRouter>
  );
};

jest.mock('../../provider/RootProvider.tsx', () => ({
  ...jest.requireActual('../../provider/RootProvider.tsx'),
  useRootContext: jest.fn(),
}));

describe('{ Pagination } component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('render { Pagination } check context', () => {
    mockedUseRootContext.mockImplementation(() => ({
      currentPage: '1',
      isFirstPage: true,
      isLastPage: false,
      isPagerShow: true,
    }));

    paginationRender();

    // Assert that the pager buttons and current page are rendered correctly
    expect(screen.getByText('prev')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('next')).toBeInTheDocument();
  });

  it('{ Pagination } all buttons are active', () => {
    mockedUseRootContext.mockImplementation(() => ({
      currentPage: '2',
      isFirstPage: false,
      isLastPage: false,
      isPagerShow: true,
    }));

    paginationRender();

    expect(screen.getByText('prev')).toBeInTheDocument();
    expect(screen.getByText('prev')).not.toHaveClass('hidden');
  });

  it('{ Pagination } check if { next } button hidden', () => {
    mockedUseRootContext.mockImplementation(() => ({
      currentPage: '65',
      isFirstPage: false,
      isLastPage: true,
      isPagerShow: true,
    }));

    paginationRender();

    expect(screen.getByText('next')).toBeInTheDocument();
    expect(screen.getByText('next')).toHaveClass('hidden');
  });
});
