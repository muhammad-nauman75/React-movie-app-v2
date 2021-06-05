import React from "react";

const MovieCardBottom = ({ movie }) => {
  return (
    <div className="movie-item-bottom">
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
    </div>
  );
};

export default MovieCardBottom;
