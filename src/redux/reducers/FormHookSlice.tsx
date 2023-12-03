import { createSlice } from '@reduxjs/toolkit';
import { IFormData } from 'src/interfaces/FormData.ts';

const FormHookSlice = createSlice({
  name: 'hook',
  initialState: [] as IFormData[],
  reducers: {
    setFormList: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { setFormList } = FormHookSlice.actions;
export const selectHookFrom = (state: { hook: IFormData[] }) => state.hook;

export default FormHookSlice.reducer;
