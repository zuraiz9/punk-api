import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { onChange } = props;

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          const beerName = e.target.value;
          onChange(beerName);
        }}
      />
    </div>
  );
};

export default SearchBar;
