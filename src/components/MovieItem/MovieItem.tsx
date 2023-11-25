import { Movie } from "../../interfaces";
import { MovieItemDiv } from "../../styles";

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  const { poster_path, original_title } = movie;
  return (
    <MovieItemDiv>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <span>{original_title}</span>
    </MovieItemDiv>
  );
};

export default MovieItem;
