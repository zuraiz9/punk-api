import styles from "./App.module.scss";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import CardContainer from "./Components/CardContainer";

const App = () => {
  const [beers, setBeers] = useState([]);


  

  const handleSearch = (beerName) => {
    if (beerName == undefined || beerName == "") {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => setBeers(data)); 
    } else
      fetch("https://api.punkapi.com/v2/beers?beer_name=" + beerName)
        .then((response) => response.json())
        .then((data) => setBeers(data));
  };




  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>The Big Bad Brewery</h2>
      <SearchBar onChange={handleSearch} />
      <CardContainer data={beers} />
    </div>
  );
};

export default App;
