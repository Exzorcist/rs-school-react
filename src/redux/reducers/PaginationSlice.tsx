import { createSlice } from '@reduxjs/toolkit';

interface IPagination {
  offset: number;
  currentPage: number;
  currentLimit: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isPagerShow: boolean;
}

const initialState: IPagination = {
  offset: 0,
  currentPage: 1,
  currentLimit: 10,
  isFirstPage: false,
  isLastPage: false,
  isPagerShow: true,
};

const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      return { ...state, currentPage: action.payload };
    },

    setCurrentLimit: (state, action) => {
      return { ...state, currentLimit: action.payload };
    },

    setIsFirstPage: (state, action) => {
      return { ...state, isFirstPage: action.payload };
    },

    setIsLastPage: (state, action) => {
      return { ...state, isLastPage: action.payload };
    },

    setIsPagerShow: (state, action) => {
      return { ...state, isPagerShow: action.payload };
    },

    setOffset: (state, action) => {
      return { ...state, offset: action.payload };
    },
  },
});

export const { setCurrentPage, setCurrentLimit, setIsFirstPage } = PaginationSlice.actions;
export const { setIsLastPage, setIsPagerShow, setOffset } = PaginationSlice.actions;

export const selectCurrentPage = (state: { pagination: IPagination }) =>
  state.pagination.currentPage;
export const selectCurrentLimit = (state: { pagination: IPagination }) =>
  state.pagination.currentLimit;
export const selectIsFirstPage = (state: { pagination: IPagination }) =>
  state.pagination.isFirstPage;
export const selectIsPagerShow = (state: { pagination: IPagination }) =>
  state.pagination.isPagerShow;
export const selectIsLastPage = (state: { pagination: IPagination }) => state.pagination.isLastPage;
export const selectOffset = (state: { pagination: IPagination }) => state.pagination.offset;

export default PaginationSlice.reducer;
