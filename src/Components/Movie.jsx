import styles from "./styles/Movie.module.css";

function Movie({ movie }) {
  if (!(movie.Title && movie.Poster)) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieItem}>
      <h3>
        <span>{movie.Title}</span>
      </h3>
      <div>
        <img src={movie.Poster} alt="" />
      </div>
    </div>
  );
}

export default Movie;
