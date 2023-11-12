import { render, screen } from '@testing-library/react';
import PokemonAbility from './PokemonAbility';
import { usePokemonCurrentContext } from '../../../provider/PokemonCurrentProvider';

const mockedUsePokemonCurrentContext = usePokemonCurrentContext as jest.Mock;

// Mock the context provider
jest.mock('../../../provider/PokemonCurrentProvider.tsx', () => ({
  usePokemonCurrentContext: jest.fn(),
}));

describe('{ PokemonAbility } component', () => {
  it('renders abilities correctly', () => {
    // Mock the context values
    mockedUsePokemonCurrentContext.mockImplementation(() => ({
      abilities: [{ ability: { name: 'ability1' } }, { ability: { name: 'ability2' } }],
    }));

    // Render the component within the context provider
    render(<PokemonAbility />);

    // Assert that the abilities are rendered correctly
    expect(screen.getByText('Abilities:')).toBeInTheDocument();
    expect(screen.getByText('ability1')).toBeInTheDocument();
    expect(screen.getByText('ability2')).toBeInTheDocument();
  });
});
