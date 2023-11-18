import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const LoaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (s, action) => action.payload,
  },
});

export const { setLoader } = LoaderSlice.actions;
export const selectLoader = (state: { loader: boolean }) => state.loader;

export default LoaderSlice.reducer;
