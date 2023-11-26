import { render, screen } from '@testing-library/react';
import PokemonType from './PokemonType';

describe('{ PokemonType } component', () => {
  test('renders PokemonType component with types', () => {
    const types = [{ type: { name: 'type1' } }, { type: { name: 'type2' } }];

    render(<PokemonType types={types} />);

    expect(screen.getByText('Type:')).toBeInTheDocument();
    expect(screen.getByText('type1')).toBeInTheDocument();
    expect(screen.getByText('type2')).toBeInTheDocument();
  });
});
