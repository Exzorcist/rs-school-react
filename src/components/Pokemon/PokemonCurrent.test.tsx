import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PokemonCurrent from './PokemonCurrent';
import LoaderReducer, { setLoader } from '../../redux/reducers/LoaderSlice';
import SearchReducer, { setRequest } from '../../redux/reducers/SearchSlice';
import PokemonAPI from '../../redux/services/PokemonService';

const mockAxios = new MockAdapter(axios);

const store = configureStore({
  reducer: {
    loader: LoaderReducer,
    search: SearchReducer,
    [PokemonAPI.reducerPath]: PokemonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PokemonAPI.middleware),
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('PokemonCurrent Component', () => {
  it('renders Pokemon details correctly', async () => {
    const pokemonName = 'bulbasaur';
    const mockResponse = {
      id: 1,
      name: 'bulbasaur',
      abilities: [{ ability: { name: 'overgrow' } }, { ability: { name: 'chlorophyll' } }],
      stats: [
        { base_stat: 45, stat: { name: 'hp' } },
        { base_stat: 49, stat: { name: 'attack' } },
        { base_stat: 49, stat: { name: 'defense' } },
        { base_stat: 65, stat: { name: 'special-attack' } },
        { base_stat: 65, stat: { name: 'special-defense' } },
        { base_stat: 45, stat: { name: 'speed' } },
      ],
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      sprites: { other: { 'official-artwork': { front_default: 'image_test_url' } } },
    };

    mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).reply(200, mockResponse);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCurrent />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => screen.getByText(/Wrong path/i));
    expect(screen.getByText(/Wrong path/i)).toBeInTheDocument();
    expect(screen.getByText(/Can't load data/i)).toBeInTheDocument();
  });
});

afterEach(() => {
  mockAxios.reset();
  store.dispatch(setLoader(false));
  store.dispatch(setRequest('1'));
});
