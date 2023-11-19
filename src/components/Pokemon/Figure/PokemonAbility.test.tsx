import { render } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PokemonAbility from './PokemonAbility';

const mock = new MockAdapter(axios);
const mockAbilities = [{ ability: { name: 'ability1' } }, { ability: { name: 'ability2' } }];

describe('PokemonAbility component', () => {
  it('renders abilities correctly', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon/1').reply(200, { abilities: mockAbilities });

    const { getByText } = render(<PokemonAbility abilities={mockAbilities} />);

    mockAbilities.forEach((ability) => {
      const abilityElement = getByText(ability.ability.name);
      expect(abilityElement).toBeInTheDocument();
    });
  });
});
