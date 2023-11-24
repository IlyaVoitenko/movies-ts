import axios, { AxiosRequestConfig } from "axios";

export const getListMovie = async () => {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWIzMDljNGNlOWJhNjhiNGMzMzdiOTU2NzhjYjA5NSIsInN1YiI6IjY1NWY2OTIwMmIxMTNkMDBlYmE2Y2QxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6A7y8D_FkpgGhYLri3jL6XIaeCB6rIgjddpxMR8n7Yc",
    },
  };
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    return data.results;
  } catch (error) {
    return error;
  }
};
