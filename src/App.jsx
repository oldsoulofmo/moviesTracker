import { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";

const KEY = "b60db4df";

const randomMovieTitles = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "The Godfather",
  "Titanic",
  "Gladiator",
  "The Shawshank Redemption",
  "Jurassic Park",
  "Star Wars",
  "The Avengers",
];

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    const fetchMovies = async () => {
      try {
        const promises = randomMovieTitles.map((title) =>
          fetch(`http://www.omdbapi.com/?apikey=${KEY}&t=${title}`).then(
            (response) => response.json()
          )
        );

        const data = await Promise.all(promises);

        console.log(data);
        setMovies(data);
      } catch (err) {
        console.error("Error fetching data :", err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
