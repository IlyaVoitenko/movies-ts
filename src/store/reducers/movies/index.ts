import { createSlice } from "@reduxjs/toolkit";
import { MovieArray } from "../../../interfaces";
import { getMovieListThunk } from "../../thunk";

const initialState: MovieArray = {
  movieList: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieListThunk.fulfilled, (state, action) => {
      state.movieList = [action.payload];
    });
  },
  reducers: {},
});

export default moviesSlice.reducer;
