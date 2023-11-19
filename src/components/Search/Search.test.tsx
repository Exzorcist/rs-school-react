import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Search from './Search';
import SearchReducer, { setRequest } from '../../redux/reducers/SearchSlice';
import PaginationReducer, { setCurrentPage } from '../../redux/reducers/PaginationSlice';
import PokemonAPI from '../../redux/services/PokemonService';

const mockAxios = new MockAdapter(axios);

const store = configureStore({
  reducer: {
    search: SearchReducer,
    pagination: PaginationReducer,
    [PokemonAPI.reducerPath]: PokemonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PokemonAPI.middleware),
});

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('Search Component', () => {
  it('updates search request and navigates correctly', async () => {
    const mockResponse = {
      id: 5,
      name: 'charmeleon',
    };

    mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon/charmeleon`).reply(200, mockResponse);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/page/1']}>
          <Search />
        </MemoryRouter>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(/For example: charmeleon or 142/i);
    fireEvent.input(searchInput, { target: { value: 'charmeleon' } });
  });
});

afterEach(() => {
  mockAxios.reset();
  store.dispatch(setRequest(''));
  store.dispatch(setCurrentPage(1));
});
