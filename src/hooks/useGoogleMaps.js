import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState, useRef } from "react";

const useGoogleMaps = () => {
  const mapContainer = useRef();
  //const mapInstance = useRef();
  //const markerInstance = useRef();
  const [mapInstance, setMapInstance] = useState();

  //-33.90490724488811, -60.57927677879034

  const mapOptions = {
    center: {
      lat: -33.902903,
      lng: -60.578356,
    },
    zoom: 14,
  };

  const markerSettings = {
    pergamino: [
      /* { lat: -33.891928, lng: -60.578678 },
      { lat: -33.90490724488811, lng: -60.57927677879034 },*/
      [-33.891928, -60.578678],
      [-33.90490724488811, -60.57927677879034],
    ],
  };

  const getLoader = () =>
    new Loader({
      apiKey: "AIzaSyDPkAO51Tg4B7LB0DHxRGG3JlomHkRQPGc",
      version: "weekly",
    });

  const createNewMarkers = ({ mapInstance, currentCityMarkerSettings }) => {
    const latLng = (lat, lng) => new window.google.maps.LatLng(lat, lng);
    console.log(latLng);
    for (let i = 0; i < currentCityMarkerSettings.length; i++) {
      console.log();
      const currentPosition = currentCityMarkerSettings[i];
      new window.google.maps.Marker({
        position: latLng(currentPosition[0], currentPosition[1]),
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          scaledSize: { height: 45, width: 45 },
        },
        map: mapInstance,
      });
    }
  };

  const setNewMarkersGroup = (currentCityMarkerSettings) =>
    createNewMarkers({ mapInstance, currentCityMarkerSettings });

  const getMapInstance = ({ loader }) =>
    loader.loadCallback((e) => {
      if (e) {
        console.log(e);
      } else {
        const map = new window.google.maps.Map(
          mapContainer.current,
          mapOptions
        );
        setMapInstance(map);
        createNewMarkers({
          mapInstance: map,
          currentCityMarkerSettings: markerSettings.pergamino,
        });
      }
    });

  useEffect(() => {
    const loader = getLoader();
    getMapInstance({ loader });
  }, []);

  return { mapContainer, setNewMarkersGroup };
};

export default useGoogleMaps;
