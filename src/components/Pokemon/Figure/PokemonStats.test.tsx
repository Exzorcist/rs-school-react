import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PokemonStats from './PokemonStats';

const mock = new MockAdapter(axios);

const mockStats = [
  { stat: { name: 'speed' }, base_stat: 60 },
  { stat: { name: 'defense' }, base_stat: 80 },
];

describe('PokemonStats component', () => {
  beforeEach(() => {
    mock.reset();
  });

  it('renders stats correctly', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon/1').reply(200, { stats: mockStats });

    const { getByText } = render(<PokemonStats stats={mockStats} />);

    await waitFor(() => {
      mockStats.forEach((stat) => {
        const statNameElement = getByText(stat.stat.name);
        const baseStatElement = getByText(stat.base_stat.toString());

        expect(statNameElement).toBeInTheDocument();
        expect(baseStatElement).toBeInTheDocument();
      });
    });
  });
});
