import React from "react";
import { right, right2, umbrelaIcon, worng } from "../../../utils/icons";
import { advData } from "../../../utils/data";

const Advandge = () => {
  return (
    <div className="advantage-container">
        <div className="icon">
              {umbrelaIcon}
    
        </div>
      <div className="content">
        <p>
          Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
          etile pariatur dolor mollit reprehenderit magna tempor ex minim velit
          sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor
          adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.
        </p>
        <div className="showMore">Show More</div>
        <div className="advatage">
            {advData.map((item)=>(<div className="item"><div className="icon">{item.is ? right2 : worng}</div> <p>{item.content}</p> </div>))}
        </div>
      </div>
    </div>
  );
};

export default Advandge;
