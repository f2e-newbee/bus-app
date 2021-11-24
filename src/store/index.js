import { configureStore } from "@reduxjs/toolkit";
// import fetchReducer from "./slice/fetch";
import fetchReducer from "./reducer/fetchReducer";

export const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
