import { Movie } from "../../interfaces";

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  const { backdrop_path, original_title } = movie;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={original_title}
      />
      <span>{original_title}</span>
    </div>
  );
};

export default MovieItem;
