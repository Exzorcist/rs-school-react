import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import PokemonsList from './PokemonsList';
import LoaderReducer, { setLoader } from '../../redux/reducers/LoaderSlice';
import PaginationReducer, {
  setCurrentPage,
  setOffset,
  setIsFirstPage,
  setIsLastPage,
} from '../../redux/reducers/PaginationSlice';
import PokemonAPI from '../../redux/services/PokemonService';

const mockAxios = new MockAdapter(axios);

const store = configureStore({
  reducer: {
    loader: LoaderReducer,
    pagination: PaginationReducer,
    [PokemonAPI.reducerPath]: PokemonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PokemonAPI.middleware),
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('PokemonsList Component', () => {
  it('renders Pokemon list correctly', async () => {
    const mockResponse = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    mockAxios
      .onGet('https://pokeapi.co/api/v2/pokemon', { params: { offset: 0, limit: 10 } })
      .reply(200, mockResponse);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/page/1']}>
          <PokemonsList />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Use pokemon/i)).toBeInTheDocument();
    });
  });
});

afterEach(() => {
  mockAxios.reset();
  store.dispatch(setLoader(false));
  store.dispatch(setCurrentPage(1));
  store.dispatch(setOffset(0));
  store.dispatch(setIsFirstPage(false));
  store.dispatch(setIsLastPage(false));
});
