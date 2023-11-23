import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";

export const store = configureStore({
  reducer: {
    counter: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
