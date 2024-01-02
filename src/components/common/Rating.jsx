import React from "react";
import { filter_rating } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { setRatings } from "../../redux/features/filterSlice";
import ChackBox from "./ChackBox";

const Rating = () => {
  const dispatch = useDispatch();
  const selectedRatings = useSelector((state) => state.filters.selectedRatings);

  const handleRatingCheckboxChange = (rating) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((selectedRating) => selectedRating !== rating)
      : [...selectedRatings, rating];

    dispatch(setRatings(updatedRatings));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {filter_rating.map((line, index) => (
        <div
          key={index}
          className="star"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <ChackBox
            key={line.number}
            text={""}
            isSelected={selectedRatings.includes(line.number)}
            onCheckboxChange={() => handleRatingCheckboxChange(line.number)}
          />
          <div>
            {line.icon.map((icon, i) => (
              <span key={i}>{icon}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rating;
