import React from "react";
import { PiHeadphonesLight } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { dotsIcon } from "../../utils/icons";

const Section10 = () => {
  return (
    <div className="section10">
      <div className="title">
        <h2>Still have a question?</h2>
        <p>The Brilliant reasons Entrada should be your one-stop-shop!</p>
      </div>
      <div className="cards-container">
        <div className="dots">{dotsIcon}</div>
        <div className="card card1">
          <div className="icon">
            <PiHeadphonesLight />
          </div>
          <div>
            <h4>For Sales</h4>
            <p>The Brilliant reasons Entrada be your one-stop-shop!</p>
          </div>
          <div>
            <h5>sales@entrada.com</h5>
            <h5>+977(985) 456-32-12</h5>
          </div>
        </div>
        <div className="card card2">
          <div className="icon">
            <AiOutlineQuestionCircle />
          </div>
          <div>
            <h4>Help & Support</h4>
            <p>The Brilliant reasons Entrada be your one-stop-shop!</p>
          </div>
          <div>
            <h5>help@entrada.com</h5>
            <h5>+977(985) 456-32-12</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
