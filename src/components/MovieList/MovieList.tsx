import { useSelector } from "react-redux";
import { movieListSelector } from "../../store/selectors";
import { Movie } from "../../interfaces";
import MovieItem from "../MovieItem";

const MovieList = () => {
  const movieList = useSelector(movieListSelector);
  return (
    <div>
      {movieList.map((movie: Movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
