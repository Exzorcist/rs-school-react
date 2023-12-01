import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import CountrySlice from './reducers/CountrySlice.tsx';
import FormHookSlice from './reducers/FormHookSlice.tsx';
import FormUncontrolledSlice from './reducers/FormUncontrolledSlice.tsx';

const initReducer = combineReducers({
  country: CountrySlice,
  hook: FormHookSlice,
  uncontrolled: FormUncontrolledSlice,
});

export const store = configureStore({
  reducer: initReducer,
  devTools: true,
});

export const setupStore = (preloadedState?: PreloadedState<RootReducer>) => {
  return configureStore({
    reducer: initReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof store.getState>;
export type RootReducer = ReturnType<typeof initReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
