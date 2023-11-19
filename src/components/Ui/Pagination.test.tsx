import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Pagination from './Pagination';
import PaginationReducer, { setCurrentPage, setOffset } from '../../redux/reducers/PaginationSlice';

const mockAxios = new MockAdapter(axios);

const store = configureStore({
  reducer: {
    pagination: PaginationReducer,
  },
});

describe('Pagination Component', () => {
  it('changes the current page when "prev" and "next" buttons are clicked', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/page/1']}>
          <Pagination />
        </MemoryRouter>
      </Provider>
    );

    mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`).reply(200, {});

    expect(screen.getByText('1')).toBeInTheDocument();
    fireEvent.click(screen.getByText('next'));

    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('prev'));

    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
});

afterEach(() => {
  mockAxios.reset();
  store.dispatch(setCurrentPage(1));
  store.dispatch(setOffset(0));
});
