import { MovieArray } from "../../interfaces";

export const movieListSelector = (state: MovieArray) => state.movies.moviesList;
