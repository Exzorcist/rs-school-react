import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import PokemonType from './PokemonType';

const mock = new MockAdapter(axios);

const mockTypes = [{ type: { name: 'grass' } }, { type: { name: 'poison' } }];

describe('PokemonType component', () => {
  beforeEach(() => {
    mock.reset();
  });

  it('renders types correctly', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon/1').reply(200, { types: mockTypes });

    const { getByText } = render(<PokemonType types={mockTypes} />);

    await waitFor(() => {
      mockTypes.forEach((type) => {
        const typeNameElement = getByText(type.type.name);
        expect(typeNameElement).toBeInTheDocument();
      });
    });
  });
});
