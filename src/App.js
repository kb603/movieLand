import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./search.svg";

// 332ddc3e
const apiKey = " http://www.omdbapi.com/?i=tt3896198&apikey=332ddc3e";

const movie1 = {
  Title: "Minions: The Rise of Gru",
  Year: "2022",
  imdbID: "tt5113044",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDM3YWEwYTMtNmY3ZS00YzJiLWFlNWItOWFmNjY0YzA4ZDE3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${apiKey}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("minions");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
