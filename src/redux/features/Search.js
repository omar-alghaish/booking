import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchOpen: false,
};

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    openCloseSearch: (state, action) => {
      state.searchOpen = action.payload;
    },
  },
});

export const { openCloseSearch } = search.actions;

export default search.reducer;
