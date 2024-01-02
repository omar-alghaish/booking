import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./features/Map";
import searchSlice from "./features/Search";
import filterSlice from "./features/filterSlice";

const store = configureStore({
  reducer: {
    map: mapSlice,
    search:searchSlice,
    filters: filterSlice,

  },
});

export default store;
