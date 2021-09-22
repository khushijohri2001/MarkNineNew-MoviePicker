import React, { useState } from "react";
import "./styles.css";

var movieDb = {
  Fantasy: [
    { name: "Harry Potter and The Deadly Hollows: Part 1&2", rating: "97%" },
    { name: "The Jungle Book (2016)", rating: "94%" },
    { name: "Jumanji (1995)", rating: "92%" }
  ],
  Action: [
    { name: "Justice League (2017)", rating: "93%" },
    { name: "Avenger: End Games (2019)", rating: "95%" },
    { name: "Black Widow (2021)", rating: "98%" }
  ],
  Horror: [
    { name: "The Evil Returns (2012)", rating: "92%" },
    { name: "The Conjuring (2013)", rating: "97%" },
    { name: "The Conjuring 2 (2016)", rating: "94%" }
  ]
};

const movieWeKnow = Object.keys(movieDb);

export default function App() {
  var [chosenGenre, setGenre] = useState("Fantasy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎬 Movie Picker 🍿</h1>
      <br></br>
      <p>
        Here is a list of movies. All you need to do is, select a Genre and get
        the list.
      </p>
      <br></br>

      <div>
        {movieWeKnow.map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {movieDb[chosenGenre].map((movie) => (
            <li key={movie.name}>
              {" "}
              <div>{movie.name}</div>
              <div>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <span>Designed & Developed by KHUSHI JOHRI</span>
      </div>
    </div>
  );
}
