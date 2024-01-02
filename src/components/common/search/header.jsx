import React from "react";
import Select from "react-select";
import { search_header } from "../../../utils/data";

const sortOptions = [
    { value: "popular", label: "Popular" },
    { value: "old", label: "Old" },
    { value: "New", label: "New" },

  ];

const Header = () => {
  return (
    <div className="search-header">
      <div className="row1">
        <div className="left">Showing 1-10 of 2037 results for "cultural"</div>
        <div className="right">
          <p>sort by</p>{" "}
          <Select
            className="location-select"
            placeholder="Select an activity"
            options={sortOptions}

            styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none",
                  boxShadow: "none",
                  color:"black"
                }),
                option: (provided, { isSelected }) => ({
                  ...provided,
                  backgroundColor: isSelected ? "#28b0a6" : "white",
                  color: isSelected ? "white" : "inherit",
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "200px",
                  right:0
                }),
          
              }}
          />
        </div>
      </div>
      <div className="row2">{search_header.map((item)=>(
        <div className="item">{item.icon} <p>{item.name}</p></div>
      ))}</div>
    </div>
  );
};

export default Header;
