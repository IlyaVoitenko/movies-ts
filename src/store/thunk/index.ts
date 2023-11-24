import { createAsyncThunk } from "@reduxjs/toolkit";
import { getListMovie } from "../../services";

export const getMovieListThunk = createAsyncThunk(
  "users/getMovieList",
  async (_, thunkAPI) => {
    try {
      const response = await getListMovie();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
