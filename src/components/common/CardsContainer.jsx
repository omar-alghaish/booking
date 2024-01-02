import React from "react";
import Card1 from "./Card1";

const CardsContainer = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map((card) => (
        <Card1 data={card} />
      ))}
    </div>
  );
};

export default CardsContainer;
