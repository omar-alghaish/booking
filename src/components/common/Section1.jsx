import React, { useEffect, useState } from "react";
import i1 from "../../assets/images/i1.jpeg";
import { section1Data, socialLinks } from "../../utils/data";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { circleArrow, searchBackground } from "../../utils/icons";
import { cardIcon } from "../../utils/icons";
import Select from "react-select";
import * as countries from "countries-list";
import MapWithSearch from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { openCloseMap } from "../../redux/features/Map";

const countryOptions = Object.keys(countries.countries).map((code) => ({
  value: code,
  label: countries.countries[code].name,
}));

const activityOptions = [
  { value: "bungee_jump", label: "Bungee Jump" },
  { value: "hiking", label: "Hiking" },
];

const Section1 = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDateInputVisible, setIsDateInputVisible] = useState(false); // New state
  const { location, mapOpen } = useSelector((state) => state.map);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(location);
    console.log(mapOpen);
  }, [location, mapOpen]);

  const openMap = () => {
    dispatch(openCloseMap(true));
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDateInput = () => {
    setIsDateInputVisible(!isDateInputVisible);
  };

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Hide the date input after selecting a date
    setIsDateInputVisible(false);
  };

  const handleActivityChange = (selectedOption) => {
    setSelectedActivity(selectedOption);
  };

  const handleBooking = () => {
    const bookingData = {
      location: selectedLocation ? selectedLocation.label : null,
      date: selectedDate,
      activity: selectedActivity ? selectedActivity.label : null,
    };
    console.log(bookingData);
  };

  return (
    <div className="section1-container">
      <div className="center-content">
        <div className="background">
          <img src={i1} alt="" />
        </div>
        <div className="content">
          <div className="first-line">
            <div className="dash"></div>
            <p>The Himalayan Mountain Ranges</p>
          </div>
          <div className="second-line">Nepal Country</div>
          <div className="third-line">
            <div className="left">
              <div className="temp">
                <p>-02° C</p>
                <p>Very Cold</p>
              </div>
              <div className="arrows">{circleArrow}</div>
            </div>
            <div className="right">
              <div className="first-column">{cardIcon}</div>
              <div className="second-column">
                <p>We Accept Payment Through All Cards & Banking</p>
                <Link>Book Now!</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          {section1Data.map((item, index) => (
            <div className="item" key={index}>
              <h2
               onClick={
                  item.name === "Location"
                    ? openMap
                    : item.name === "Activity"
                    ? openMenu
                    : item.name === "Date"
                    ? toggleDateInput
                    : null
                } 
              >
                {item.name}
              </h2>
              {item.name === "Location" && location && (
                <div onClick={openMap}>
                                  <p  className="country">{location.country || "choose country"}</p>

                </div>
              )}
              {item.name === "Date" &&  (
                <div >
                                  <p onClick={toggleDateInput}  className="selected-date">{selectedDate || "choose date"}</p>

                </div>
              )}
              <div className="data">
                {item.name === "Location" && mapOpen ? (
                  <MapWithSearch
                    style={{
                      position: "fixed",
                      height: "100vh",
                      width: "100vw",
                      top: "0",
                      left: "0",
                    }}
                  />
                ) : item.name === "Date" && isDateInputVisible ? (
                  <input
                    className="date-select"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                  />
                ) : item.name === "Activity" ? (
                  <Select
                    className="location-select"
                    value={selectedActivity}
                    onChange={handleActivityChange}
                    options={activityOptions}
                    placeholder="Select an activity"
                    menuIsOpen={menuOpen}
                    onMenuOpen={() => setMenuOpen(true)}
                    onMenuClose={() => setMenuOpen(false)}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        border: "none",
                        boxShadow: "none",
                        marginLeft: "-10px",
                      }),
                      dropdownIndicator: (provided) => ({
                        ...provided,
                        display: "none",
                      }),
                      indicatorsContainer: (provided) => ({
                        ...provided,
                        display: "none",
                      }),
                      option: (provided, { isSelected }) => ({
                        ...provided,
                        borderBottom: "none",
                        backgroundColor: isSelected ? "#e0e0e0" : "white",
                        color: isSelected ? "black" : "inherit",
                        padding: 0,
                        margin: 0,
                      }),
                      menu: (provided) => ({
                        ...provided,
                        width: "200px",
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        fontSize: "16px", // Adjust font size for the placeholder
                        // Add more styles as needed
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        fontSize: "16px", // Adjust font size for the selected value
                        // Add more styles as needed
                      }),
                    }}
                  />
                ) : null}
              </div>
            </div>
          ))}
          <div onClick={handleBooking} className="searchBackground">
            {searchBackground}
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <Link key={index} to={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;

