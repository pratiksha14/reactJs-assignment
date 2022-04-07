import { configureStore } from "@reduxjs/toolkit";

import showsReducer from "./tvShows-store";

const store = configureStore({
  reducer: { shows: showsReducer }
});

export default store;
