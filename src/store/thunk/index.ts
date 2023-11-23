import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListMovie } from "../../services";

export const getMovieListThunk = createAsyncThunk(
  "users/getMovieList",
  (_, thunkAPI) => {
    try {
      const response = getListMovie();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
