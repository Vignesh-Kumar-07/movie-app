/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react";
import MovieItem from "./MovieItem";

import SearchMovie from "./SearchMovie";
import { useGetData } from "./useGetData";
import NotFound from './NotFound'

function MovieList() {
  const {movies,isLoading,fetchData} = useGetData()
  const [searchQuery,setSearchQuery] = useState("")



  const searchMovie = searchQuery.length > 0 ? movies.filter(movie => `${movie.name}`.toLowerCase().includes(searchQuery.toLowerCase())) : movies




  return (
    <>
      <SearchMovie searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <div className="movieList">
      {!searchMovie.length ? <NotFound/> : <MovieItem movies={searchMovie} fetchData={fetchData} isLoading={isLoading} />
      }

    </div>
    </>
  );
}

export default MovieList;
