import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './reducers/SearchSlice.ts';
import ListReducer from './reducers/PokemonListSlice.ts';
import PaginationReducer from './reducers/PaginationSlice.ts';
import LoaderReducer from './reducers/LoaderSlice.ts';
import PokemonAPI from './services/PokemonService.ts';

const store = configureStore({
  reducer: {
    loader: LoaderReducer,
    search: SearchReducer,
    pagination: PaginationReducer,
    list: ListReducer,
    [PokemonAPI.reducerPath]: PokemonAPI.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PokemonAPI.middleware),
});

export default store;
