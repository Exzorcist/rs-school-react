import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCurrent from './PokemonCurrent';
import { IPokemonCurrentProps } from '../../interfaces/Props.ts';

describe('PokemonCurrent component', () => {
  const mockPokemon = {
    id: 1,
    name: 'Bulbasaur',
    image: 'bulbasaur-image-url',
    types: [{ type: { name: 'grass' } }],
    abilities: [{ ability: { name: 'chlorophyll' } }],
    stats: [{ stat: { name: 'hp' }, base_stat: 45 }],
  };

  const mockProps: IPokemonCurrentProps = {
    pokemon: mockPokemon,
    page: '1',
    limit: '10',
  };

  test('renders PokemonCurrent component with Pokemon details', () => {
    render(
      <PokemonCurrent pokemon={mockProps.pokemon} page={mockProps.page} limit={mockProps.limit} />
    );

    expect(screen.getByTestId('pokemon')).toBeInTheDocument();
    expect(screen.getByText(mockPokemon.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockPokemon.name)).toBeInTheDocument();
    expect(screen.getByTestId('close')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('close'));
  });

  test('renders NotFound component when no Pokemon details are provided', () => {
    render(<PokemonCurrent pokemon={{}} page={mockProps.page} limit={mockProps.limit} />);

    expect(screen.getByText(/Wrong path/i)).toBeInTheDocument();
    expect(screen.queryByText(mockPokemon.name)).not.toBeInTheDocument();
  });
});
