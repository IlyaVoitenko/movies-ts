import { createSlice } from "@reduxjs/toolkit";
import { MovieArray } from "../../../interfaces";
import { getMovieListThunk } from "../../thunk";

const initialState: MovieArray = {
  moviesList: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovieListThunk.fulfilled, (state, action) => {
      state.moviesList = [...action.payload];
    });
    builder.addCase(getMovieListThunk.rejected, (state) => {
      state.moviesList = [];
    });
  },
  reducers: {},
});

export default moviesSlice.reducer;
