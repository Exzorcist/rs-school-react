import { render } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PokemonAPI from '../../redux/services/PokemonService.tsx';
import PokemonsListData from './PokemonListData.tsx';
import PokemonListSlice from '../../redux/reducers/PokemonListSlice.tsx';

const mockAxios = new MockAdapter(axios);

const store = configureStore({
  reducer: {
    [PokemonAPI.reducerPath]: PokemonAPI.reducer,
    list: PokemonListSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PokemonAPI.middleware),
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('PokemonsListData Component', () => {
  it('renders Pokemon details correctly', async () => {
    const pokemonName = 'bulbasaur';
    const mockResponse = {
      id: 1,
      name: 'bulbasaur',
      abilities: [{ ability: { name: 'overgrow' } }],
      sprites: { other: { 'official-artwork': { front_default: 'image_url' } } },
      stats: [{ base_stat: 45, stat: { name: 'hp' } }],
      types: [{ type: { name: 'grass' } }],
    };

    mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).reply(200, mockResponse);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonsListData name={pokemonName} />
        </MemoryRouter>
      </Provider>
    );

    expect(store.getState().list).toEqual([]);
  });
});
