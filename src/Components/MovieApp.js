import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import SearchForm from "./SearchForm";

const MovieApp = () => {
  //States
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    searchInput: "",
    movieType: "",
  });

  //Api Request
  const fetchMovies = async (input) => {
    const url = `http://www.omdbapi.com/?apikey=4dbd1e8b&s=${input.searchInput}&type=${input.movieType}`;
    const res = await fetch(url);
    const moviesData = await res.json();

    if (moviesData.Search) {
      setMovies(moviesData.Search);
      setMessage(`Total results found ${moviesData.totalResults}`);
    } else {
      if (moviesData.Error.includes("Incorrect IMDb ID.")) {
        setMessage("");
      } else {
        setMessage(moviesData.Error);
      }
    }
  };
  //console.log(movies);

  //Call Api
  useEffect(() => {
    fetchMovies(input);
  }, [input]);

  return (
    <div className="main-container">
      <SearchForm input={input} setInput={setInput} />
      <p className="search-message">{message}</p>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MovieApp;
