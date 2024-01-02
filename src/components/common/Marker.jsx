// CustomMarker.jsx
import React from "react";
import { Icon } from "leaflet";

const CustomMarker = () => {
  const markerIcon = new Icon({
    iconUrl: "path-to-your-marker-icon.png", // replace with your marker icon image
    iconSize: [30, 30], // adjust the size of the icon
    iconAnchor: [15, 30], // adjust the anchor point of the icon
    popupAnchor: [0, -30], // adjust the popup anchor point
  });

  return <div style={{ display: "none" }} />;
};

export default CustomMarker;
