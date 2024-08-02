import MovieItem from "./MovieItem";
import SearchMovie from "../ui/SearchMovie";
import NotFound from "../ui/NotFound";
import { useMovie } from "../context/MovieContext.jsx";

function MovieList() {
  const { searchMovie } = useMovie();

  return (
    <>
      <SearchMovie />

      <div className="movieList">
        {!searchMovie.length ? <NotFound /> : <MovieItem />}
      </div>
    </>
  );
}

export default MovieList;
