import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  ZoomControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { openCloseMap, setLocation } from "../../redux/features/Map";

const MapWithSearch = ({ selectedLocation, style }) => {
  const [mapCenter, setMapCenter] = useState([26.2540493, 29.2675469]);
  const [zoom, setZoom] = useState(5)
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapKey, setMapKey] = useState(0);
  const [recommendations, setRecommendations] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // Set map center based on the selected location
    if (selectedLocation && selectedLocation.value === "EGY") {
      setMapCenter([27.9881, 86.925]);
    }
    setZoom(2)
    // Add more conditions for other countries as needed
  }, [selectedLocation, zoom]);

  useEffect(() => {
    // Change the map center when searchTerm changes
    if (selectedPlace) {
      setMapCenter([
        selectedPlace.coordinates.lat,
        selectedPlace.coordinates.lng,
      ]);
      setZoom(2)
      // Update the key to force a re-render
      setMapKey((prevKey) => prevKey + 1);
    }
  }, [selectedPlace]);

  useEffect(() => {
    // Fetch recommendations using OpenCage Geocoding API
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?key=2309ff0408874442a288da9508f14246&q=${searchTerm}&pretty=1`
        );

        if (response.data.results && response.data.results.length > 0) {
          // Extract location names from the OpenCage API response
          const recommendationNames = response.data.results.map(
            (result) => result.formatted
          );

          setRecommendations(recommendationNames);
        } else {
          console.error("No recommendations found:", response.data);
          setRecommendations([]);
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error.message);
      }
    };

    // Fetch recommendations only if searchTerm is not empty
    if (searchTerm.trim() !== "") {
      fetchRecommendations();
    } else {
      setRecommendations([]); // Clear recommendations if searchTerm is empty
    }
  }, [searchTerm]);

  const handleCustomSearch = async (selectedRecommendation) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=2309ff0408874442a288da9508f14246&q=${selectedRecommendation}&pretty=1`
      );

      if (!response.data.results || response.data.results.length === 0) {
        throw new Error("Location not found");
      }

      const result = response.data.results[0];
      const coordinates = result.geometry;
      setMapCenter([coordinates.lat, coordinates.lng]);
      setZoom(2)
      setSelectedPlace({
        coordinates,
        country: result.components.country,
        city: result.components.city,
      });

      // Clear recommendations after selecting one
      setRecommendations([]);
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }
  };

  const handleRecommendationClick = (recommendation) => {
    // Call handleCustomSearch with the selected recommendation
    handleCustomSearch(recommendation);
    setZoom(2)
  };

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=2309ff0408874442a288da9508f14246&q=${lat},${lng}&pretty=1`
      );

      if (response.data.results && response.data.results.length > 0) {
        const result = response.data.results[0];
        const selectedLocation = {
          ...result,
          country: result.components.country,
          city: result.components.city,
        };

        console.log(response);

        // Dispatch setLocation with the selected location
        dispatch(setLocation(selectedLocation));

        // Dispatch openCloseMap to close the map
      }
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }
    dispatch(openCloseMap(false));
  };

  return (
    <div className="map" style={style}>
      <div className="top">
        <div className="input">
          <input
            type="text"
            placeholder="Search "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => handleCustomSearch(searchTerm)}>
            <CiSearch />
          </button>
        </div>
        {recommendations.length > 0 && (
          <div className="recomandation">
            <ul>
              {recommendations?.map((recommendation, index) => (
                <div
                  key={index}
                  onClick={() => handleRecommendationClick(recommendation)}
                >
                  {recommendation}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      <MapContainer
        key={mapKey}
        center={mapCenter}
        zoom={zoom}
        style={{ height: "100vh", width: "100%" }}
        onClick={handleMapClick}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedPlace && (
          <Marker position={selectedPlace.coordinates}>
            <Popup>
              <div>
                <p>Country: {selectedPlace.country}</p>
                <p>City: {selectedPlace.city}</p>
              </div>
            </Popup>
          </Marker>
        )}
        <MapClickHandler onMapClick={handleMapClick} />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

const MapClickHandler = ({ onMapClick }) => {
  const map = useMapEvents({
    click: (event) => {
      onMapClick(event);
    },
  });

  return null;
};

export default MapWithSearch;
