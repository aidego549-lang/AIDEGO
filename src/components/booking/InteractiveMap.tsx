"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon in Leaflet + Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom styling for the map to make it look premium
const mapStyle = `
  .leaflet-container {
    background: #f8fafc;
    width: 100%;
    height: 100%;
  }
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
    border-radius: 12px !important;
    overflow: hidden;
  }
  .leaflet-control-zoom-in, .leaflet-control-zoom-out {
    background: white !important;
    color: #000 !important;
    border: none !important;
    width: 40px !important;
    height: 40px !important;
    line-height: 40px !important;
    font-weight: bold !important;
  }
  .leaflet-bar a:hover {
    background-color: #f1f5f9 !important;
  }
`;

const MapUpdater = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
};

const InteractiveMap = () => {
  const [mounted, setMounted] = useState(false);
  const [center, setCenter] = useState<[number, number]>([6.5244, 3.3792]); // Lagos, Nigeria

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-surface animate-pulse" />;

  return (
    <div className="w-full h-full relative">
      <style>{mapStyle}</style>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={center}>
          <Popup>
            <div className="p-2 font-bold text-text">Your Location</div>
          </Popup>
        </Marker>
        <MapUpdater center={center} />
      </MapContainer>
      
      {/* Search Overlay Placeholder */}
      <div className="absolute top-6 left-6 right-6 z-[1000] flex gap-2 pointer-events-none">
        <div className="flex-1 max-w-md pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-md border border-white/50 shadow-2xl rounded-2xl p-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search for a location..." 
              className="bg-transparent border-none outline-none flex-1 text-sm font-bold text-text placeholder:text-text-muted"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
