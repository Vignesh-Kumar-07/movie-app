/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useEffect, useState, useCallback } from "react";

import axios from "axios";
const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [num, setNum] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const searchMovie =
    searchQuery.length > 0
      ? movies.filter((movie) =>
          `${movie.name}`.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : movies;

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://test.create.diagnal.com/data/page${num}.json`
      );

      setNum(num + 1);
      setMovies((prevData) => [
        ...prevData,
        ...response.data.page["content-items"].content,
      ]);

      setIsloading(true);
    } catch (error) {
      setIsloading(false);
      // movies.pop();
      let movieContainer = movies;
      movieContainer.pop();
      movieContainer.push({
        name: "Family Pot",
        "poster-image": "placeholder_for_missing_posters.png",
      });
      setMovies([...movieContainer]);

      console.log(movies.length);
      // setMovies((movie) => [
      //   ...movie,
      //   {
      //     name: "Family Pot",
      //     "poster-image": "placeholder_for_missing_posters.png",
      //   },
      // ]);
    }
  }, [num]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        isLoading,
        fetchData,
        searchQuery,
        setSearchQuery,
        searchMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(MovieContext);
  return context;
}

export { useMovie, MovieProvider };
