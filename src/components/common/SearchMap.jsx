// import React, { useState } from "react";
// import axios from "axios";

// const CustomSearch = ({ onLocationSelect }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.opencagedata.com/geocode/v1/json?key=2309ff0408874442a288da9508f14246&q=${searchTerm}&pretty=1`
//       );

//       if (!response.data.results || response.data.results.length === 0) {
//         throw new Error("Location not found");
//       }

//       const result = response.data.results[0];
//       const coordinates = result.geometry;
//  console.log(result)
//       onLocationSelect({
//         coordinates,
//         country: result.components.country,
//         city: result.components.city,
//       });
//     } catch (error) {
//       console.error("Error fetching location:", error.message);
//     }
//   };

//   return (
//     <div style={{zIndex:"111111", position:"absolute"}}>
//       <input
//         type="text"
//         placeholder="Search for a city or country"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default CustomSearch;


import React, { useState } from "react";
import axios from "axios";

const CustomSearch = ({ onLocationSelect, mapInstance, setMapCenter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=2309ff0408874442a288da9508f14246&q=${searchTerm}&pretty=1`
      );
  
      if (!response.data.results || response.data.results.length === 0) {
        throw new Error("Location not found");
      }
  
      const result = response.data.results[0];
      const coordinates = result.geometry;
  
      console.log(coordinates);
  
      // Use the onLocationSelect callback to update the parent component
      onLocationSelect({
        coordinates,
        country: result.components.country,
        city: result.components.city,
      });
  
      // Update the map center directly
      setMapCenter([coordinates.lat, coordinates.lng]);
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }
  };

  return (
    <div  style={{zIndex:"111111", position:"absolute"}}>
      <input
        type="text"
        placeholder="Search for a city or country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CustomSearch;
