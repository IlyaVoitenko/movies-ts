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
      "https://api.themoviedb.org/3/movie/changes?page=1",
      options
    );
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
