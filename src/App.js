import React, { useEffect } from "react";
import "./App.css";
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
  const searchMovies = async (title) => {
    const response = await fetch(`${apiKey}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value="superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
