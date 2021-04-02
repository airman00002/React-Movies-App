import React, { useState } from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500";
function Movie({ movie,price,setPrice}) {
  const [editPrice, setEditPrice] = useState(false);

  let newPrice = null;
  if (editPrice) {
    // const submitPrice = (event) => {
    //   event.preventDefault();
    //   setPrice(event);
    //   setEditPrice(false);
    // };
    newPrice = (
      <form >
        <input
          type="text"
          value={`${price} ไม่ทันครับ XXXXX`}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    );
  } else {
    newPrice = <span>{price} บาท</span>;
  }

  const setVote = (vote) => {
    if (vote >= 8) return "green";
    if (vote >= 6) return "orange";
    if (vote < 6) return "red";
  };

  return (
    <div className="movie-list" key={movie.id}>
      <img src={IMG_API + movie.poster_path} alt="" />
      <div class="img-overlay img-overlay-blur">
        <div class="img-title">
          <p>{movie.overview}</p>{" "}
        </div>
      </div>

      <div className="movie-info">
        <h5>{movie.title}</h5>
        <span className={`tags ${setVote(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>

      {/* ราคา */}
      <div className="price">{newPrice}</div>

      <div className="Price_addToCart">
        <button onClick={() => setEditPrice(!editPrice)}>XXEdit PriceXX</button>

        <button>Add To Cart</button>
      </div>
    </div>
  );
}
export default Movie;
