import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PokemonsList from './PokemonsList';
import { useRootContext } from '../../provider/RootProvider.tsx';

// Mock the global fetch function
(global.fetch as jest.Mock) = jest.fn();

// const mockedUsePokemonListContext = usePokemonListContext as jest.Mock;
const mockedUseRootContext = useRootContext as jest.Mock;

// Mock the useRootContext function
jest.mock('../../provider/RootProvider.tsx', () => ({
  useRootContext: jest.fn(),
}));

describe('{ PokemonsList } component', () => {
  it('render items after loading', async () => {
    mockedUseRootContext.mockImplementation(() => ({
      currentLimit: 10,
      setCurrentLimit: jest.fn(),
      setIsFirstPage: jest.fn(),
      setIsLastPage: jest.fn(),
      setIsPagerShow: jest.fn(),
    }));

    // Mock the response for the list of Pokemon
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => ({
        results: [
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        ],
        previous: null,
        next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      }),
    });

    // Mock the response for individual Pokemon
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => ({
        id: 1,
        name: 'bulbasaur',
        abilities: [],
        sprites: { other: { 'official-artwork': { front_default: 'mockImageUrl1' } } },
        stats: [],
        types: [],
      }),
    });

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => ({
        id: 2,
        name: 'ivysaur',
        abilities: [],
        sprites: { other: { 'official-artwork': { front_default: 'mockImageUrl2' } } },
        stats: [],
        types: [],
      }),
    });

    render(
      <MemoryRouter initialEntries={['/page/1']}>
        <PokemonsList />
      </MemoryRouter>
    );

    // Wait for the component to render Pokemon items
    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('ivysaur')).toBeInTheDocument();
    });
  });

  it('navigates to Pokemon details page when a Pokemon is clicked', async () => {
    mockedUseRootContext.mockImplementation(() => ({
      currentLimit: 10,
      setCurrentLimit: jest.fn(),
      setIsFirstPage: jest.fn(),
      setIsLastPage: jest.fn(),
      setIsPagerShow: jest.fn(),
      setCurrentPage: jest.fn(),
    }));

    // Mock the response for the list of Pokemon
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => ({
        results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
        previous: null,
        next: null,
      }),
    });

    // Mock the response for individual Pokemon
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => ({
        id: 1,
        name: 'bulbasaur',
        abilities: [],
        sprites: { other: { 'official-artwork': { front_default: 'mockImageUrl1' } } },
        stats: [],
        types: [],
      }),
    });

    render(
      <MemoryRouter initialEntries={['/page/1']}>
        <Routes>
          <Route path="/page/:page/pokemon/:name" element={<div>Mock Pokemon Details</div>} />
          <Route path="/page/:page" element={<PokemonsList />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the component to render Pokemon items
    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });

    // Click on a Pokemon to navigate to its details page
    userEvent.click(screen.getByText('bulbasaur'));

    // Wait for the component to navigate
    await waitFor(() => {
      expect(screen.getByText('Mock Pokemon Details')).toBeInTheDocument();
    });
  });
});
