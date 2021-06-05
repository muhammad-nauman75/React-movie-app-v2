import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";
import MovieCardBack from "./MovieCardBack";
import MovieCardBottom from "./MovieCardBottom";
import MovieCardFront from "./MovieCardFront";

const Movie = ({
  movie,
  addFavoriteMovie,
  listID,
  removeFavoriteMovie,
  movieDetails,
  currentMovieDetail,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const addToFavoriteHandler = () => {
    addFavoriteMovie(movie);
  };

  const flipHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="movie-item" onMouseEnter={() => movieDetails(movie)}>
      <h2 className="movie-title">{movie.Title}</h2>

      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <MovieCardFront movie={movie} flipHandler={flipHandler} />

        <MovieCardBack
          currentMovieDetail={currentMovieDetail}
          flipHandler={flipHandler}
        />
      </ReactCardFlip>

      <MovieCardBottom movie={movie} />

      {listID === "search-list" ? (
        <button className="btn btn-favorite" onClick={addToFavoriteHandler}>
          Add to favorite
        </button>
      ) : (
        <button
          className="btn btn-remove-fav"
          onClick={() => removeFavoriteMovie(movie)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Movie;
