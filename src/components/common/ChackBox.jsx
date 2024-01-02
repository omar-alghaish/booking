import React from 'react';

const ChackBox = ({ text, isSelected, onCheckboxChange }) => {
  return (
    <div className="tag" key={text}>
      <label className="container">
        <input type="checkbox" checked={isSelected} onChange={() => onCheckboxChange(text)} />
        <div className="checkmark"></div>
      </label>
      <p>{text}</p>
    </div>
  );
};

export default ChackBox;

