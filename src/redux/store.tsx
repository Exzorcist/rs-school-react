import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './reducers/SearchSlice.tsx';
import ListReducer from './reducers/PokemonListSlice.tsx';
import PaginationReducer from './reducers/PaginationSlice.tsx';
import LoaderReducer from './reducers/LoaderSlice.tsx';
import PokemonAPI from './services/PokemonService.tsx';

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
