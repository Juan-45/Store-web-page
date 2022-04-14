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
      lat: -33.89757502194482,
      lng: -60.576089323497705,
    },
    zoom: 15,
  };

  const positionArr = [
    //PERGAMINO
    [-33.891928, -60.578678],
    [-33.90490724488811, -60.57927677879034],
    //ROSARIO
    [-32.952007252462764, -60.669575886508134],
    [-32.953665280919026, -60.62706570185155],
    [-32.9693499809984, -60.63369767074301],
    [-32.94605642700096, -60.64028240235162],
    [-32.946479022465596, -60.64112418233984],
    //JUNIN
    [-34.596278680522786, -60.959656068380475],
    [-34.59129331602334, -60.94148510366818],
    //BUENOS AIRES
    [-34.60895191956675, -58.38004263073937],
    [-34.56292561789363, -58.456084803540364],
    [-34.65906253041514, -58.44203213435343],
    [-34.599145770499064, -58.384829459807285],
    [-34.56973889884847, -58.445487929755146],
    [-34.56673255869329, -58.45145302542204],
    [-34.618721543410715, -58.39161330757574],
    [-34.612059561693755, -58.39168554968186],
  ];

  const getLoader = () =>
    new Loader({
      apiKey: "AIzaSyDPkAO51Tg4B7LB0DHxRGG3JlomHkRQPGc",
      version: "weekly",
    });

  const createNewMarkers = ({ mapInstance, positionArr }) => {
    const latLng = (lat, lng) => new window.google.maps.LatLng(lat, lng);
    for (let i = 0; i < positionArr.length; i++) {
      const currentPosition = positionArr[i];
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
  //TODO crear funcion para botones de ciudad que centren el mapa en la ciudad
  //TODO crear funciones para los item (domicilios) para centrar el mapa en el marker
  // const setNewMarkersGroup = (positionArr) => {};

  //createNewMarkers({ mapInstance, positionArr });

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
          positionArr,
        });
      }
    });

  const getLatLng = (lat, lng) => new window.google.maps.LatLng(lat, lng);

  useEffect(() => {
    const loader = getLoader();
    getMapInstance({ loader });
  }, []);

  return { mapContainer, mapInstance, getLatLng /*setNewMarkersGroup*/ };
};

export default useGoogleMaps;
