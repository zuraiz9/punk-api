import React from "react";
import styles from "./CardContainer.module.scss";
import BeerCard from "../BeerCard";

const CardContainer = (props) => {
  const { data } = props;
  const cardAsJSX = data.map((beer) => {


    return (
      <BeerCard
        key={beer.id}
        name={beer.name}
        info={beer.description}
        img={beer.image_url}
      />
    );
  });
  return (
    <>
      <div className={styles.CardContainer}>{cardAsJSX}</div>
    </>
  );
};

export default CardContainer;
