import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Movie from "./components/Movie";
import Search from "./components/Search";

const DATA_API =
  "https://api.themoviedb.org/3/movie/popular?api_key=11fac6ba083ebad6c5d4ef2c2eb74fc8";

function App() {
  const [movies, setMovie] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [price, setPrice] = useState(200);
  const [cartItems,setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get(DATA_API)
      .then(({ data: response }) => {
        setMovie(response.results);
        console.log(response.results);
      })
      .catch((error) => console.log(error.message));
  }, []);

  //*Click Popular
  const Popular = (event) => {
    event.preventDefault();
    axios
      .get(DATA_API)
      .then(({ data: response }) => {
        setMovie(response.results);
        console.log(response.results);
      })
      .catch((error) => console.log(error.message));
  };

  const movieElements = movies
    .filter((movie) => {
      return movie.title.includes(searchText);
    })
    .map((movie) => {
      return <Movie key={movie.id} movie={movie} price={price} setPrice={setPrice} />;
    });
  return (
    <div className="container">
      <div className="title">
        <h1 onClick={Popular}>Popular Movies</h1>
      </div>
      <div className="contant">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          setMovie={setMovie}
        />
        <div className="movie">{movieElements}</div>
      </div>
    </div>
  );
}

export default App;
