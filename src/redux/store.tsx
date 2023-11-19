import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import SearchReducer from './reducers/SearchSlice.tsx';
import ListReducer from './reducers/PokemonListSlice.tsx';
import PaginationReducer from './reducers/PaginationSlice.tsx';
import LoaderReducer from './reducers/LoaderSlice.tsx';

import PokemonAPI from './services/PokemonService.tsx';

const initReducer = combineReducers({
  loader: LoaderReducer,
  search: SearchReducer,
  pagination: PaginationReducer,
  list: ListReducer,
  [PokemonAPI.reducerPath]: PokemonAPI.reducer,
});

export const store = configureStore({
  reducer: initReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PokemonAPI.middleware),
});

export const setupStore = (preloadedState?: PreloadedState<RootReducer>) => {
  return configureStore({
    reducer: initReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(PokemonAPI.middleware),
  });
};

export type RootState = ReturnType<typeof store.getState>;
export type RootReducer = ReturnType<typeof initReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
