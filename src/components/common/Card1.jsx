import React from "react";
import { alarm, right, start } from "../../utils/icons";
import { CiHeart } from "react-icons/ci";

const Card1 = ({ data }) => {
  return (
    <div>
      <div className="card1">
        <img src={data.img} alt="" />
        <div className="number">{data.number}</div>
        <div className="name">
          <div className="left">
            <h3>{data.name}</h3>
            <p>{data.desc}</p>
          </div>
          <div className="right">
            <CiHeart />
          </div>
        </div>
        <div className="price">
          <p>from</p>
          <div className="center">
            <h2>${data.price}</h2>
            <div className="right">
              <div className="stars-container">
                {start}
                {start}
                {start}
                {start}
                {start}
              </div>
              <p>4.7 (108)</p>
            </div>
          </div>
          <p>price varies</p>
        </div>
        <div className="bottom">
          <div className="text-icon">
            {alarm} <p>7 days</p>
          </div>
          <div className="text-icon2">
            <div className="text-icon">
              {right} <p>Free Concellation</p>
            </div>
            <div className="text-icon">{right} New on Entrada</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
