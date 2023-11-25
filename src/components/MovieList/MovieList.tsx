import { useSelector } from "react-redux";
import { movieListSelector } from "../../store/selectors";
import { Movie } from "../../interfaces";
import { ContainerList } from "../../styles";
import MovieItem from "../MovieItem";

const MovieList = () => {
  const movieList = useSelector(movieListSelector);
  return (
    <ContainerList>
      {movieList.map((movie: Movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </ContainerList>
  );
};

export default MovieList;
