import React, { useState } from "react";
import "./styles.css";

var movieDb = {
  Fantasy: [
    {
      name: "Harry Potter and The Deadly Hollows: Part 1&2",
      description: "Harry Potter and Voldemort final face off",
      rating: "97%"
    },
    {
      name: "The Jungle Book (2016)",
      description: "A boy living his life with animals",
      rating: "94%"
    },
    {
      name: "Jumanji (1995)",
      description: "A magical game with mysteries",
      rating: "92%"
    }
  ],
  Action: [
    {
      name: "Justice League (2017)",
      description: "Batman seeks the help of Wonder Woman",
      rating: "93%"
    },
    {
      name: "Avenger: End Games (2019)",
      description: "End of Thanos",
      rating: "95%"
    },
    {
      name: "Black Widow (2021)",
      description: "Story about Natasha Romanoff",
      rating: "98%"
    }
  ],
  Horror: [
    {
      name: "Evil Dead (1981)",
      description:
        "American supernatural horror film franchise created by Sam Raimi",
      rating: "92%"
    },
    {
      name: "The Conjuring (2013)",
      description:
        "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases",
      rating: "97%"
    },
    {
      name: "The Conjuring 2 (2016)",
      description:
        "Paranormal investigators Ed and Lorraine Warren take another sensational cases",
      rating: "94%"
    }
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
              <div className="desc">{movie.description}</div>
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
