import {
  cityCenterSettings,
  locationSettings,
} from "localData/googleMapsLocations";
import { useState } from "react";
import useGoogleMaps from "hooks/useGoogleMaps";

const useStorePicker = () => {
  const [currentCity, setCurrentCity] = useState("pergamino");
  const {
    mapContainer,
    mapInstance,
    panoramaInstance,
    getLatLng,
    gpsButtonHanlder,
    streetViewButtonHandler,
  } = useGoogleMaps();

  const cities = [
    { label: "Pergamino", name: "pergamino" },
    { label: "Rosario", name: "rosario" },
    { label: "Junín", name: "junin" },
    { label: "Buenos Aires", name: "buenosAires" },
  ];

  const centerMap = (centerMapSettings) => {
    const { zoom, coordinates } = centerMapSettings;
    panoramaInstance.setVisible(false);
    mapInstance.setCenter(getLatLng(coordinates[0], coordinates[1]));
    mapInstance.setZoom(zoom);
  };

  const handleClick = (event) => {
    setCurrentCity(event.target.name);
    panoramaInstance.setVisible(false);
    centerMap(cityCenterSettings[event.target.name].centerMapSettings);
  };

  return {
    locationSettings,
    currentCity,
    mapContainer,
    gpsButtonHanlder,
    streetViewButtonHandler,
    centerMap,
    handleClick,
    cities,
  };
};

export default useStorePicker;
