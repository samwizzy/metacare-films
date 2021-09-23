import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./slices/filmsSlice";

const store = configureStore({
  reducer: {
    films: filmsSlice
  }
});

export default store;
