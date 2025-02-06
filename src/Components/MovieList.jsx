import Movie from "./Movie";
import styles from "./styles/MovieList.module.css";

function MovieList({ movies }) {
  return (
    <ul className={styles.list}>
      {movies.length > 0 ? (
        movies.map((movie) => <Movie movie={movie} key={movie.imdbID} />)
      ) : (
        <p>Loading ... </p>
      )}
    </ul>
  );
}

export default MovieList;
