"use client";

import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// @ts-ignore
import L from "leaflet";
import "leaflet-control-geocoder";
import LeafletGeocoder from "@/app/(frontoffice)/_components/map/Geocoder";
import { useCoordonnerStore } from "@/app/utils/stores/eventStore";

// Configuration de l'icône de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export const Map = () => {
  const position = [-21.456466663981892, 47.08601081382767];
  const [position_click, setPosition_click] = useState(null);
  const setCoordonner = useCoordonnerStore((state) => state.setCoordonner);

  const LocationMarker = () => {
    useMapEvents({
      // @ts-ignore
      click(e) {
        setPosition_click(e.latlng);
        console.log("Coordonnées cliquées:", e.latlng);
        setCoordonner({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });

    return position_click === null ? null : (
      <Marker position={position_click}>
        <Popup>
          {/* @ts-ignore */}
          Coordonnées : {position_click.lat}, {position_click.lng}
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      // @ts-ignore
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LeafletGeocoder />
      <Marker position={[-21.455737, 47.085496]}>
        <Popup>
          Ici, Madagascar <br /> Une belle place !
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};
