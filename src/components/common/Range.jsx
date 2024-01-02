import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMinPrice, setMaxPrice } from '../../redux/features/filterSlice';

const PriceRangeSlider = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value);
    dispatch(setMinPrice(newMinPrice));
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    dispatch(setMaxPrice(newMaxPrice));
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="rangeslider">
          <input
            className="min input-ranges"
            name="range_1"
            type="range"
            min={1}
            max={1000}
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            className="max input-ranges"
            name="range_1"
            type="range"
            min={1}
            max={1000}
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className="values">
          <div className='number min-range'>$<span id="first">{minPrice}</span></div> -
          <div className='number max-range'>$<span id="second">{maxPrice}</span></div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
