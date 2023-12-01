import { createSlice } from '@reduxjs/toolkit';
import { ICountryData } from '../../interfaces/CountryData.ts';
import CountryJSON from '../../json/countries.json';

const CountrySlice = createSlice({
  name: 'country',
  initialState: CountryJSON,
  reducers: {},
});

export const selectHookFrom = (state: { country: ICountryData[] }) => state.country;

export default CountrySlice.reducer;
