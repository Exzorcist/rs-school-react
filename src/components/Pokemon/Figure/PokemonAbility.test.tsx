import { render, screen } from '@testing-library/react';
import PokemonAbility from './PokemonAbility.tsx';

describe('{ PokemonAbility } component', () => {
  test('renders PokemonAbility component with abilities', () => {
    const abilities = [{ ability: { name: 'ability1' } }, { ability: { name: 'ability2' } }];
    render(<PokemonAbility abilities={abilities} />);

    expect(screen.getByText('Abilities:')).toBeInTheDocument();
    expect(screen.getByText('ability1')).toBeInTheDocument();
    expect(screen.getByText('ability2')).toBeInTheDocument();
  });
});
