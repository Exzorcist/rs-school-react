import { createSlice } from '@reduxjs/toolkit';
import { PokemonInformation } from '../../interfaces/Pokemon.ts';

const initialState: PokemonInformation[] | [] = [];

const ListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      return [...state, action.payload];
    },

    clearList: () => [],
  },
});

export const { setList, clearList } = ListSlice.actions;
export const selectList = (state: { list: PokemonInformation[] }) => state.list;

export default ListSlice.reducer;
