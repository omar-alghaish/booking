import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapOpen: false,
  location: {},
};

export const map = createSlice({
  name: "map",
  initialState,
  reducers: {
    openCloseMap: (state, action) => {
      state.mapOpen = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {setLocation, openCloseMap} = map.actions;

export default map.reducer;
