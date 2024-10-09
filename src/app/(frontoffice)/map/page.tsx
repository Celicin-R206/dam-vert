"use client";

import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configuration de l'icône de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

import Navbar from "../_components/navbar";

const Page = () => {
  return (
    <div>
      <div className="w-[1150px] m-auto">
        <Navbar />
        <Map />
      </div>
    </div>
  );
};

export default Page;

const Map = () => {
  const mapRef = useRef(null);
  const position = [-21.456466663981892, 47.08601081382767];

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-21.455737, 47.085496]}>
        <Popup>
          Ici, Madagascar <br /> Une belle place !
        </Popup>
      </Marker>
    </MapContainer>
  );
};
