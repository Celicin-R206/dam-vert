import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
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

type PositionProps = {
  positions: {
    id_emplacement: number;
    latitude: number;
    longitude: number;
    name_emplacement: string;
  } | null; // Accepter `null`
};

export const MapFrontOffice: React.FC<PositionProps> = ({ positions }) => {
  // Définir une position par défaut si `positions` est null
  const defaultPosition = [-21.456466663981892, 47.08601081382767];
  const position = positions
    ? [positions.latitude, positions.longitude]
    : defaultPosition;

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
      style={{ height: "20rem", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions && (
        <Circle
          center={position}
          // @ts-ignore
          radius={200}
          pathOptions={{
            color: "green",
            fillColor: "#1c5e34",
            fillOpacity: 0.5,
          }}
        />
      )}
      <LeafletGeocoder />
      <Marker position={position}>
        <Popup>
          {positions
            ? `Emplacement: ${positions.name_emplacement}`
            : "Emplacement par défaut"}
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};
