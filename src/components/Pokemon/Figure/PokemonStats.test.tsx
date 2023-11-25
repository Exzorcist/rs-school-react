import { render, screen } from '@testing-library/react';
import PokemonStats from './PokemonStats';

describe('{ PokemonStats } Component', () => {
  test('renders PokemonStats component with stats', () => {
    const stats = [
      { stat: { name: 'stat1' }, base_stat: 50 },
      { stat: { name: 'stat2' }, base_stat: 60 },
    ];

    render(<PokemonStats stats={stats} />);

    expect(screen.getByText('Stats:')).toBeInTheDocument();
    expect(screen.getByText('stat1')).toBeInTheDocument();
    expect(screen.getByText('stat2')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
  });
});
