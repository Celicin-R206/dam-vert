import { useEffect } from "react";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { useMap } from "react-leaflet";

const LeafletGeocoder = () => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
      collapsed: false,
      placeholder: "Rechercher un lieu",
      errorMessage: "Aucun résultat trouvé",
      showUniqueResult: true,
    })
      .on("markgeocode", function (e) {
        // Récupérer la position du résultat de la recherche
        const { center } = e.geocode || {};
        
        // Vérifier si la position est disponible
        if (center) {
          // Supprimer tout polygone existant
          map.eachLayer((layer) => {
            if (layer instanceof L.Polygon) {
              map.removeLayer(layer);
            }
          });

          // Créer un marqueur à la position du résultat de la recherche
          const marker = L.marker(center).addTo(map);

          // Centrer la carte sur le marqueur
          map.setView(center, map.getZoom());
        }
      })
      .addTo(map);

    return () => {
      map.removeControl(geocoder);
    };
  }, [map]);

  return null;
};

export default LeafletGeocoder;
