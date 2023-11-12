import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PokemonCurrent from './PokemonCurrent';

(global.fetch as jest.Mock) = jest.fn();

describe('{ PokemonCurrent } Component', () => {
  it('renders Pokemon information when a valid Pokemon name is provided', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: 25,
            name: 'pikachu',
            abilities: [{ ability: { name: 'static' } }],
            sprites: { other: { 'official-artwork': { front_default: 'mockImageUrl' } } },
            stats: [{ stat: { name: 'hp' }, base_stat: 80 }],
            types: [{ type: { name: 'electric' } }],
          }),
      })
    ) as jest.Mock;

    render(
      <MemoryRouter initialEntries={['/pokemon/pikachu']}>
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonCurrent />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
      expect(screen.getByText(/Electric/i)).toBeInTheDocument();
      expect(screen.getByText(/Static/i)).toBeInTheDocument();
      expect(screen.getByAltText('pikachu')).toBeInTheDocument();
      expect(screen.getByAltText('pikachu')).toHaveAttribute('src', 'mockImageUrl');
    });
  });

  it('renders NotFound component when an invalid Pokemon name is provided', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Not Found'));

    render(
      <MemoryRouter initialEntries={['/pokemon/invalidPokemon']}>
        <Routes>
          <Route path="/pokemon/:name" element={<PokemonCurrent />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Wrong path/)).toBeInTheDocument();
      expect(screen.getByText(/Can't load data/)).toBeInTheDocument();
    });

    (global.fetch as jest.Mock).mockClear();
  });
});
