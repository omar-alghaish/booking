import React from "react";
import { section8Data } from "../../utils/data";
import { dotIcon } from "../../utils/icons";
const Section8 = () => {
  return (
    <div className="section8">
      <div className="imgs">
        <div className="first-column">
          <div className="dots">
            <div className="firstColumn column">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((dot) => dotIcon)}
            </div>
            <div className="socendColumn column">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((dot) => dotIcon)}
            </div>
            <div className="thirdColumn column">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((dot) => dotIcon)}
            </div>
          </div>
          <img src={section8Data.imgs[0]} alt="" />
        </div>
        <div className="second-column">
          <div className="first-row">
            <img src={section8Data.imgs[1]} alt="" />
          </div>
          <div className="second-row">
            <img src={section8Data.imgs[2]} alt="" />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div></div>
        <div className="title">Subscribe For Offers</div>
        <h3>Adventures Calling You Guys!</h3>
        <p>The Brilliant reasons Entrada should be your one-stop-shop!</p>

        <div className="input">
          <input type="email" name="" id="" placeholder="Enter your email" />
          <button>Send</button>
        </div>
        <div className="bottom">Expect a reply in 2-3 working days</div>
      </div>
    </div>
  );
};

export default Section8;
