import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonsList from './PokemonList.tsx';
import { IPokemonsListProps } from '../../interfaces/Props.ts';

describe('PokemonsList component', () => {
  const mockList = [
    {
      name: 'bulbasaur',
      image: 'bulbasaur-image-url',
    },
    {
      name: 'charmander',
      image: 'charmander-image-url',
    },
  ];

  const mockProps: IPokemonsListProps = {
    list: mockList,
    page: '1',
    limit: '10',
  };

  test('renders PokemonsList component with a list of Pokemon', () => {
    render(<PokemonsList list={mockProps.list} page={mockProps.page} limit={mockProps.limit} />);

    mockList.forEach((pokemon) => {
      const pokemonElement = screen.getByText(pokemon.name);
      const pokemonImage = screen.getByAltText(pokemon.name);

      expect(pokemonElement).toBeInTheDocument();
      expect(pokemonImage).toBeInTheDocument();
    });

    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  test('handles click event on Pokemon and updates localStorage', () => {
    render(<PokemonsList list={mockProps.list} page={mockProps.page} limit={mockProps.limit} />);

    const bulbasaurLink = screen.getByText('bulbasaur');
    fireEvent.click(bulbasaurLink);
  });
});
