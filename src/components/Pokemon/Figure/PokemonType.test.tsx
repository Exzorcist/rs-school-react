import { render, screen } from '@testing-library/react';
import PokemonType from './PokemonType';
import { usePokemonCurrentContext } from '../../../provider/PokemonCurrentProvider';

const mockedUsePokemonCurrentContext = usePokemonCurrentContext as jest.Mock;

// Mock the context provider
jest.mock('../../../provider/PokemonCurrentProvider.tsx', () => ({
  usePokemonCurrentContext: jest.fn(),
}));

describe('PokemonType component', () => {
  it('renders types correctly', () => {
    // Mock the context values
    mockedUsePokemonCurrentContext.mockImplementation(() => ({
      types: [{ type: { name: 'type1' } }, { type: { name: 'type2' } }],
    }));

    // Render the component within the context provider
    render(<PokemonType />);

    // Assert that the types are rendered correctly
    expect(screen.getByText('Type:')).toBeInTheDocument();
    expect(screen.getByText('type1')).toBeInTheDocument();
    expect(screen.getByText('type2')).toBeInTheDocument();
  });
});
