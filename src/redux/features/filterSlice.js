// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedTags: [],
    selectedDuration: [],
    selectedRatings: [],
    selectedAgeGroups: [],
    selectedSpecials: [],
    minPrice: 1,
    maxPrice: 1000,
  },
  reducers: {
    setTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    setDuration: (state, action) => {
      state.selectedDuration = action.payload;
    },
    setRatings: (state, action) => {
      state.selectedRatings = action.payload;
    },
    setAgeGroups: (state, action) => {
      state.selectedAgeGroups = action.payload;
    },
    setSpecials: (state, action) => {
      state.selectedSpecials = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const {
  setTags,
  setDuration,
  setRatings,
  setAgeGroups,
  setSpecials,
  setMinPrice,
  setMaxPrice,
} = filtersSlice.actions;
export default filtersSlice.reducer;
