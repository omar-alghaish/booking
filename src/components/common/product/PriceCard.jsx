import React from "react";
import { dateIcon, decreaseIcon, increaseIcon } from "../../../utils/icons";

const PriceCard = () => {
  const increment = (id) => {
    const input = document.getElementById(id);
    input.value = parseInt(input.value, 10) + 1;
  };

  const decrement = (id) => {
    const input = document.getElementById(id);
    const value = parseInt(input.value, 10);
    if (value > 0) {
      input.value = value - 1;
    }
  };

  return (
    <div className="price-card">
      <div className="top">
        <div className="line1">
          <p className="before">$2469</p>
          <div className="discount">
            <div className="after">
              <p>$1759</p>
              per person
            </div>
            <div className="discount-num">20% OFF</div>
          </div>
          <div className="message">*Price based on selections below.</div>
        </div>
        <div className="line2">
          <div className="travelers">
            <label htmlFor="travelers">Travelers</label>
            <div className="number-input">
              <p>2 Adult, 1 Child</p>
              <div className="buttons-container">
                <button
                  className="decrement"
                  onClick={() => decrement("travelersInput")}
                >
                  {decreaseIcon}
                </button>
                <input type="text" name="" id="travelersInput" value="0" />
                <button
                  className="increment"
                  onClick={() => increment("travelersInput")}
                >
                  {increaseIcon}
                </button>
              </div>
            </div>
          </div>

          <div className="travelers">
            <label htmlFor="selections">Selections</label>
            <div className="number-input">
              <p>Flight, hotel, car etc.</p>
              <div className="buttons-container">
                <button
                  className="decrement"
                  onClick={() => decrement("selectionsInput")}
                >
                  {decreaseIcon}
                </button>
                <input type="text" name="" id="selectionsInput" value="0" />
                <button
                  className="increment"
                  onClick={() => increment("selectionsInput")}
                >
                  {increaseIcon}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="line3">
          <button>Check Availability</button>
        </div>
      </div>
      <div className="bottom">
        <p>If you have question about this tour, please feel free to ask</p>
        <button>Ask the Tour Expert</button>
        <p className="p2">*All questions are replied to within 24-48 hrs</p>
      </div>
    </div>
  );
};

export default PriceCard;
