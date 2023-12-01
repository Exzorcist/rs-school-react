import { createSlice } from '@reduxjs/toolkit';
import { IFormData } from 'src/interfaces/FormData.ts';

const FormUncontrolledSlice = createSlice({
  name: 'uncontrolled',
  initialState: [] as IFormData[],
  reducers: {
    setFormList: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { setFormList } = FormUncontrolledSlice.actions;
export const selectUncontrolledFrom = (state: { uncontrolled: IFormData[] }) => state.uncontrolled;

export default FormUncontrolledSlice.reducer;
