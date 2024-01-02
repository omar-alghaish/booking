import React from "react";
import { heart, icon1, start } from "../../../utils/icons";

const DiscriptionHeader = () => {
  return (
    <div className="discription-header">
      <p>{`Destination > Portugal > Laos`}</p>
      <div className="line2">
        <h1>Sandy beach holiday in Lagos</h1>{" "}
        <div className="right">{icon1}</div>
      </div>
      <div className="line3" >
        <div className="star-container" style={{display:"flex", alignItems:"center"}}>
          {[1, 1, 1, 1, 1].map((star) => start)} <p style={{marginLeft:"20px"}}>6,788 Reviews</p>
        </div>
        
      </div>
    </div>
  );
};

export default DiscriptionHeader;
