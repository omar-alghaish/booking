import React from "react";
import { dateIcon } from "../../../utils/icons";
import { filter_age, filter_duration, filter_rating, filter_specials, filter_tags } from "../../../utils/data";
import ChackBox from "../ChackBox";
import Rating from "../Rating";
import PriceRangeSlider from "../Range";
import { useSelector, useDispatch } from 'react-redux';
import { setDuration, setTags, setRatings, setAgeGroups, setSpecials } from "../../../redux/features/filterSlice";

const SideBar = ({name}) => {
  const selectedTags = useSelector((state) => state.filters.selectedTags);
  const selectedDuration = useSelector((state) => state.filters.selectedDuration);
  const selectedRatings = useSelector((state) => state.filters.selectedRatings);
  const selectedAgeGroups = useSelector((state) => state.filters.selectedAgeGroups);
  const selectedSpecials = useSelector((state) => state.filters.selectedSpecials);

  const dispatch = useDispatch();

  const handleTagCheckboxChange = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    dispatch(setTags(updatedTags));
  };

  const handleDurationCheckboxChange = (duration) => {
    const updatedDurations = selectedDuration.includes(duration)
      ? selectedDuration.filter((selectedDuration) => selectedDuration !== duration)
      : [...selectedDuration, duration];

    dispatch(setDuration(updatedDurations));
  };

  const handleAgeGroupCheckboxChange = (ageGroup) => {
    const updatedAgeGroups = selectedAgeGroups.includes(ageGroup)
      ? selectedAgeGroups.filter((selectedAgeGroup) => selectedAgeGroup !== ageGroup)
      : [...selectedAgeGroups, ageGroup];

    dispatch(setAgeGroups(updatedAgeGroups));
  };

  const handleSpecialsCheckboxChange = (special) => {
    const updatedSpecials = selectedSpecials.includes(special)
      ? selectedSpecials.filter((selectedSpecial) => selectedSpecial !== special)
      : [...selectedSpecials, special];

    dispatch(setSpecials(updatedSpecials));
  };

  return (
    <div className={`search-side-bar ${name}`}>
      <div className="date">
        <input type="date" id="dateInput" className="datepicker-input" />
        <label
          htmlFor="dateInput"
          onClick={() => document.getElementById("dateInput").click()}
        >
          {dateIcon}
        </label>
      </div>
      <div className="tags">
        <h5>Popular Tags</h5>
        {filter_tags.map((tag) => (
          <ChackBox
            key={tag}
            text={tag}
            isSelected={selectedTags.includes(tag)}
            onCheckboxChange={() => handleTagCheckboxChange(tag)}
          />
        ))}
      </div>
      <div className="tags">
        <h5>Price Range</h5>
        <PriceRangeSlider />
      </div>
      <div className="tags">
        <h5>Duration</h5>
        {filter_duration.map((duration) => (
          <ChackBox
            key={duration}
            text={duration}
            isSelected={selectedDuration.includes(duration)}
            onCheckboxChange={() => handleDurationCheckboxChange(duration)}
          />
        ))}
      </div>
      <div className="tags">
        <h5>Tour Rating</h5>
        <Rating />
      </div>
      <div className="tags">
        <h5>Age Group</h5>
        {filter_age.map((ageGroup) => (
          <ChackBox
            key={ageGroup}
            text={ageGroup}
            isSelected={selectedAgeGroups.includes(ageGroup)}
            onCheckboxChange={() => handleAgeGroupCheckboxChange(ageGroup)}
          />
        ))}
      </div>
      <div className="tags">
        <h5>Specials</h5>
        {filter_specials.map((special) => (
          <ChackBox
            key={special}
            text={special}
            isSelected={selectedSpecials.includes(special)}
            onCheckboxChange={() => handleSpecialsCheckboxChange(special)}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
