import React from "react";

const SearchForm = ({ input, setInput }) => {
  //Search Input Field function
  const searchInputHandler = (e) => {
    setInput({
      ...input,
      searchInput: e.target.value,
    });
  };

  //Movie Type Dropdown function
  const movieTypeHandler = (e) => {
    setInput({
      ...input,
      movieType: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////////////////
  return (
    <div className="input-form">
      <input
        className="input-box"
        type="text"
        placeholder="Search movie name here...."
        value={input.searchInput}
        onChange={searchInputHandler}
      />
      <select
        className="type-dropdown"
        value={input.movieType}
        onChange={movieTypeHandler}
      >
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
      </select>
    </div>
  );
};

export default SearchForm;
