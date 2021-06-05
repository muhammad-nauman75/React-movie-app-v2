import React from "react";

const MovieCardBack = ({ currentMovieDetail, flipHandler }) => {
  return (
    <div className="movie-detail" onMouseLeave={flipHandler}>
      <div className="movie-detail-card">
        <p className="movie-detail-line">
          <span className="card-detail">Genre: </span>{" "}
          {currentMovieDetail.Genre}
        </p>
        <p className="movie-detail-line">
          <span className="card-detail">Director: </span>{" "}
          {currentMovieDetail.Director}
        </p>
        <p className="movie-detail-line">
          <span className="card-detail">Actors: </span>{" "}
          {currentMovieDetail.Actors}
        </p>
        <p className="movie-detail-line">
          <span className="card-detail">Awards: </span>{" "}
          {currentMovieDetail.Awards}
        </p>
        <p className="movie-detail-line">
          <span className="card-detail">Duration: </span>{" "}
          {currentMovieDetail.Runtime}
        </p>
        <p className="movie-detail-line">
          <span className="card-detail">imdbRating: </span>{" "}
          {currentMovieDetail.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieCardBack;
