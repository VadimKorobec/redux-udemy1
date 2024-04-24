import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (state.includes(action.payload)) {
        return state;
      }
      return [...state, action.payload];
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => {
      return [];
    },
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilters = (state) => state.filters;
