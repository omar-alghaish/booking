import React from "react";
import { paper } from "../../../utils/icons";
import { overview } from "../../../utils/data";

const arr = [
  "Overview",
  "Itinerary",
  "Inclusions",
  "Reviews",
  "FAQ",
  "Essential Info",
];
const Swap = () => {
  return (
    <div className="swap">
      <div className="header">
        {arr.map((link) => (
          <p>{link}</p>
        ))}
      </div>
      <div className="content">
        <div className="icon">{paper}</div>
        <div className=" column2">
          <p>
            Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
            etile pariatur dolor mollit reprehenderit magna tempor ex minim
            velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat
            sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna
            tempor ex.
          </p>
          <p className="show-more">show more...</p>
          
        <div className="icons">
            {overview.map((icon)=> (<div className="item">
                <p>{icon.name}</p>
                <div className="icon">{icon.icon} 3</div>
            </div>))}
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Swap;
