import axios from "axios";
import React from "react";
import "../App.css";

const Search_API =
  "https://api.themoviedb.org/3/search/movie?api_key=11fac6ba083ebad6c5d4ef2c2eb74fc8&query=";

function Search({ searchText, setSearchText, setMovie }) {
  const searchMovie = (event) => {
    event.preventDefault();

    axios
      .get(Search_API + searchText)
      .then((response) => {
        const movies = response.data;
        setMovie(movies.results);
        setSearchText("");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="search">
      <form onSubmit={searchMovie}>
        <input
          className="search-input"
          type="text"
          placeholder="Search and Enter.... or Filter words"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
