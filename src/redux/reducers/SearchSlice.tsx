import { createSlice } from '@reduxjs/toolkit';

const initialState: string = localStorage.getItem('request') || '';

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setRequest: (s, action) => action.payload,
  },
});

export const { setRequest } = SearchSlice.actions;
export const selectRequset = (state: { search: string }) => state.search;

export default SearchSlice.reducer;
