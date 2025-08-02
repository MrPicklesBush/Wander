// MapComponent.tsx
"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import type { Feature } from "geojson";
import type { Layer } from "leaflet";

export default function MapComponent() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/san-francisco.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  const onEachDistrict = (feature: Feature, layer: Layer) => {
    if (feature.properties) {
      const districtName = feature.properties.name || feature.properties.DISTRICT || "Unknown";
      layer.bindPopup(`<strong>${districtName}</strong>`);
    }
  };

  const geoJSONStyle = {
    color: "#3388ff", // Outline color
    weight: 2,     
    fillColor: "transparent", // No fill color
    fillOpacity: 0     // Line thickness
  };

  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      />
      {geoData && (
        <GeoJSON
          data={geoData}
          onEachFeature={onEachDistrict}
          style={geoJSONStyle}
        />
      )}
    </MapContainer>
  );
}
