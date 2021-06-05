import React from "react";
import noPoster from "../no-poster.jpg";

const MovieCardFront = ({ flipHandler, movie }) => {
  return (
    <img
      className="movie-poster"
      onMouseEnter={flipHandler}
      src={movie.Poster.length < 5 ? noPoster : movie.Poster}
      alt={movie.Title}
    />
  );
};

export default MovieCardFront;
