import { render, screen } from '@testing-library/react';
import PokemonStats from './PokemonStats';
import { usePokemonCurrentContext } from '../../../provider/PokemonCurrentProvider';

const mockedUsePokemonCurrentContext = usePokemonCurrentContext as jest.Mock;

// Mock the context provider
jest.mock('../../../provider/PokemonCurrentProvider.tsx', () => ({
  usePokemonCurrentContext: jest.fn(),
}));

describe('PokemonStats component', () => {
  it('renders stats correctly', () => {
    // Mock the context values
    mockedUsePokemonCurrentContext.mockImplementation(() => ({
      stats: [
        { stat: { name: 'stat1' }, base_stat: 50 },
        { stat: { name: 'stat2' }, base_stat: 60 },
      ],
    }));

    // Render the component within the context provider
    render(<PokemonStats />);

    // Assert that the stats are rendered correctly
    expect(screen.getByText('Stats:')).toBeInTheDocument();
    expect(screen.getByText('stat1')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('stat2')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
  });
});
