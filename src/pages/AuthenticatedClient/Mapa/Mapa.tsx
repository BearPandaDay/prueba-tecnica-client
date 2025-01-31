import { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Definir el array de bibliotecas fuera del componente
const libraries = ["marker"];

const containerStyle = {
  width: "100%",
  height: "50vh",
};

const Mapa = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAcXG90hGd44gdD_uLUYQZwPibs3ndPg2Q", // Reemplaza con tu clave de API
    // googleMapsApiKey: "AIzaSyBVMP4BuZZq81arY-EXcx13z5UvDBSqVuI", // Reemplaza con tu clave de API
    libraries, // Usar la constante en lugar de definirlo dentro del componente
  });

  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(userLocation);
        },
        (error) => console.error("Error obteniendo ubicación:", error)
      );
    } else {
      console.error("Geolocalización no soportada por el navegador.");
    }
  }, []);

  useEffect(() => {
    if (isLoaded && location && mapRef.current) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      // Crear marcador avanzado
      markerRef.current = new AdvancedMarkerElement({
        position: location,
        map: mapRef.current,
      });
    }
  }, [isLoaded, location]);

  if (loadError) return <p>Error cargando el mapa</p>;
  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={20}
      onLoad={(map) => (mapRef.current = map)}
    />
  );
};

export { Mapa };
