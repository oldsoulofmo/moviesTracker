import styles from "./styles/SearchBar.module.css";

function SearchBar({ handleSubmit, search, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for movies ..."
        value={search}
        onChange={(e) => handleChange}
      />
    </form>
  );
}

export default SearchBar;
