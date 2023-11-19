import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Select from './Select';
import PaginationReducer, { setCurrentLimit } from '../../redux/reducers/PaginationSlice';

const mockAxios = new MockAdapter(axios);

const store = configureStore({
  reducer: {
    pagination: PaginationReducer,
  },
});

describe('Select Component', () => {
  it('changes the current limit when an option is selected', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/page/1']}>
          <Select />
        </MemoryRouter>
      </Provider>
    );

    mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`).reply(200, {});
    expect(screen.getByTestId('select-placeholder')).toHaveTextContent('10');

    fireEvent.click(screen.getByTestId('select-placeholder'));
    fireEvent.click(screen.getByTestId('select-item-15'));

    await waitFor(() => {
      expect(screen.getByTestId('select-placeholder')).toHaveTextContent('15');
    });
  });
});

afterEach(() => {
  mockAxios.reset();
  store.dispatch(setCurrentLimit(10));
});
