import styles from "./styles/SearchBar.module.css";

function SearchBar() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search for movies ..."
    />
  );
}

export default SearchBar;
