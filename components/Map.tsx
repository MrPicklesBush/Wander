// MapComponent.tsx
"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import type { Feature } from "geojson";
import type { Layer } from "leaflet";
import { sfNeighborhoods, getNeighborhoodBySlug } from "@/data/sf-neighborhoods";

interface MapComponentProps {
  height?: string;
  neighborhoodSlug?: string;
}

export default function MapComponent({ height = "h-96", neighborhoodSlug }: MapComponentProps) {
  const [geoData, setGeoData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState<[number, number]>([37.7749, -122.4194]);
  const [mapZoom, setMapZoom] = useState(12);

  // Set map center and zoom based on neighborhood
  useEffect(() => {
    if (neighborhoodSlug) {
      const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);
      if (neighborhood && neighborhood.coordinates) {
        // Center on the neighborhood coordinates
        setMapCenter([neighborhood.coordinates.lat, neighborhood.coordinates.lng]);
        setMapZoom(14); // Zoom level to see full neighborhood outline
        
        // Small delay to ensure map centers properly after data loads
        setTimeout(() => {
          setMapCenter([neighborhood.coordinates.lat, neighborhood.coordinates.lng]);
        }, 100);
      }
    }
  }, [neighborhoodSlug]);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/san-francisco.geojson");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGeoData(data);
      } catch (err: any) {
        console.error("Error fetching map data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  // Helper function to find neighborhood data by name
  const findNeighborhoodData = (name: string) => {
    return sfNeighborhoods.find(neighborhood => 
      neighborhood.name.toLowerCase().includes(name.toLowerCase()) ||
      name.toLowerCase().includes(neighborhood.name.toLowerCase())
    );
  };

  // Helper function to render stars as HTML string
  const renderStarsHTML = (rating: number) => {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      const color = i <= rating ? "text-yellow-400" : "text-gray-300";
      starsHTML += `<span class="${color}">★</span>`;
    }
    return starsHTML;
  };

  const onEachDistrict = (feature: Feature, layer: Layer) => {
    if (feature.properties) {
      const districtName = feature.properties.name || feature.properties.DISTRICT || "Unknown";
      const neighborhoodData = findNeighborhoodData(districtName);
      
      if (neighborhoodData) {
        const popupContent = `
          <div class="p-4 max-w-xs">
            <h3 class="text-lg font-bold text-gray-900 mb-2">${neighborhoodData.name}</h3>
            <div class="flex items-center mb-3">
              <div class="flex text-sm">
                ${renderStarsHTML(neighborhoodData.avgRating || 0)}
              </div>
              <span class="ml-2 text-sm text-gray-600">
                ${neighborhoodData.avgRating ? neighborhoodData.avgRating.toFixed(1) : 'N/A'} 
                (${neighborhoodData.reviewCount || 0} reviews)
              </span>
            </div>
            <div class="mb-3">
              <p class="text-sm text-gray-700 line-clamp-2">${neighborhoodData.description}</p>
            </div>
            <div class="flex flex-wrap gap-1 mb-3">
              ${neighborhoodData.characteristics?.slice(0, 3).map(char => 
                `<span class="px-2 py-1 text-xs bg-primary-100 text-primary-800 rounded-full">${char}</span>`
              ).join('') || ''}
            </div>
            <a href="/neighborhood/${neighborhoodData.slug}?from=map" 
               style="display: inline-block; width: 100%; text-align: center; background-color: #2563eb; color: white; padding: 12px 16px; border-radius: 6px; font-size: 16px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: none;"
               onmouseover="this.style.backgroundColor='#1d4ed8'"
               onmouseout="this.style.backgroundColor='#2563eb'">
              View Details
            </a>
          </div>
        `;
        layer.bindPopup(popupContent);
      } else {
        // Fallback for neighborhoods not in our data
        const popupContent = `
          <div class="p-4 max-w-xs">
            <h3 class="text-lg font-bold text-gray-900 mb-2">${districtName}</h3>
            <p class="text-sm text-gray-600 mb-3">Neighborhood information coming soon!</p>
            <a href="/neighborhoods" 
               style="display: inline-block; width: 100%; text-align: center; background-color: #2563eb; color: white; padding: 12px 16px; border-radius: 6px; font-size: 16px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: none;"
               onmouseover="this.style.backgroundColor='#1d4ed8'"
               onmouseout="this.style.backgroundColor='#2563eb'">
              Browse All Neighborhoods
            </a>
          </div>
        `;
        layer.bindPopup(popupContent);
      }
    }
  };

  const geoJSONStyle = {
    color: "#3388ff", // Outline color
    weight: 2,     
    fillColor: "transparent", // No fill color
    fillOpacity: 0     // Line thickness
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className={`flex items-center justify-center ${height} bg-gray-100 rounded-lg`}>
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className={`flex items-center justify-center ${height} bg-gray-100 rounded-lg`}>
        <div className="text-red-600">Error loading map: {error}</div>
      </div>
    );
  }

  return (
    <div className={`${height} w-full rounded-lg overflow-hidden`}>
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
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
    </div>
  );
}
