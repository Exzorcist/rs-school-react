import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePokemonListContext } from '../../provider/PokemonListProvider.tsx';
import Loader from './Loader.tsx';

// Mock the usePokemonListContext function
jest.mock('../../provider/PokemonListProvider.tsx', () => ({
  usePokemonListContext: jest.fn(),
}));

const loadingCase = (isLoading: boolean) => {
  const mockedUsePokemonListContext = usePokemonListContext as jest.Mock;
  mockedUsePokemonListContext.mockImplementation(() => ({ isLoading }));

  const { container } = render(<Loader />);

  expect(container).toBeInTheDocument();
  expect(screen.getByText('Loading. Please wait ...')).toBeInTheDocument();
};

// { isLoading } - is necessary only to change the class,
// but for completeness of tests it is necessary to transform 2 states.

describe('{ Loader } component', () => {
  it('renders Loader when isLoading is true', () => {
    loadingCase(true);
  });

  it('renders Loader when isLoading is false', () => {
    loadingCase(false);
  });
});
