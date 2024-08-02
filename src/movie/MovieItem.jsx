/* eslint-disable react/display-name */
import { styled } from "@mui/material/styles";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { useMovie } from "../context/MovieContext";

const Img = styled("img")({
  aspectRatio: "2/3",
  // display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const P = styled("p")({
  marginTop: "10px",
});

const MoviItem = React.memo(() => {
  const { searchMovie: movies, fetchData, isLoading } = useMovie();

  return (
    <>
      <Box>
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchData}
          hasMore={isLoading}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            style={{ marginTop: "10px" }}
          >
            {movies.map((movie, index) => (
              <Grid item xs={4} key={index}>
                <Link to={`poster/${movie["poster-image"]}`}>
                  <Img
                    src={`https://test.create.diagnal.com/images/${
                      movie["poster-image"] === "posterthatismissing.jpg"
                        ? "placeholder_for_missing_posters.png"
                        : movie["poster-image"]
                    }`}
                    alt=""
                  />
                </Link>
                <P>{movie.name}</P>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </>
  );
});

export default MoviItem;
