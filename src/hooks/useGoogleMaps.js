import { Loader } from "@googlemaps/js-api-loader";
import {
  initialMapSettings,
  locationSettings,
} from "localData/googleMapsLocations";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

const useGoogleMaps = () => {
  const mapContainer = useRef();
  const [mapInstance, setMapInstance] = useState();
  const [panoramaInstance, setPanoramaInstance] = useState();

  const getArrs = useCallback((locationSettings) => {
    const markersLocationsArr = [];
    const infoWindowsDetailsArr = [];
    const panoramaSettingsArr = [];
    Object.entries(locationSettings).forEach((item) => {
      const locationsSettingsOfOneCity = item[1];

      locationsSettingsOfOneCity.forEach((obj) => {
        const { zone, address, phone } = obj;
        infoWindowsDetailsArr.push({
          zone,
          address,
          phone,
        });
        markersLocationsArr.push(obj.centerMapSettings.coordinates);
        panoramaSettingsArr.push(obj.panoramaSettings);
      });
    });
    return { markersLocationsArr, infoWindowsDetailsArr, panoramaSettingsArr };
  }, []);

  const { markersLocationsArr, infoWindowsDetailsArr, panoramaSettingsArr } =
    useMemo(() => getArrs(locationSettings), [getArrs]);

  const gpsButtonHtml = '<button class="gpsButton" id="gpsButton">GPS</button>';

  const streetViewButton =
    '<button class="streetButton" id="streetButton">Vista en calle</button>';

  const htmlStringArr = useMemo(
    () =>
      infoWindowsDetailsArr.map((item) => {
        return (
          '<div class="infoWindowContainer">' +
          `<span class="infoWindowText infoWindowTitle">${item.zone}</span>` +
          `<span class="infoWindowText infoWindowP">${item.address}</span>` +
          `<span class="infoWindowText infoWindowP">${item.phone}</span>` +
          '<div class="infoWindowsButtonContainer">' +
          gpsButtonHtml +
          streetViewButton +
          "</div></div>"
        );
      }),
    [infoWindowsDetailsArr]
  );

  const getLatLng = useCallback(
    (lat, lng) => new window.google.maps.LatLng(lat, lng),
    []
  );

  const gpsButtonHanlder = useCallback((location) => {
    const { lng, lat } = location;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  }, []);

  const streetViewInfoWindowButtonHandler = useCallback(
    ({ panoramaSettings, coordinates, panoramaInstance }) => {
      const { pov, zoom } = panoramaSettings;
      panoramaInstance.setOptions({
        position: { lat: coordinates[0], lng: coordinates[1] },
        pov,
        zoom,
      });
      panoramaInstance.setVisible(true);
    },
    []
  );

  const streetViewButtonHandler = ({ panoramaSettings, coordinates }) =>
    streetViewInfoWindowButtonHandler({
      panoramaInstance,
      panoramaSettings,
      coordinates,
    });

  const addHandlers = useCallback(
    ({ coordinates, panoramaInstance, panoramaSettings }) => {
      const lat = coordinates[0];
      const lng = coordinates[1];
      document
        .getElementById("gpsButton")
        .addEventListener("click", () => gpsButtonHanlder({ lat, lng }));
      document.getElementById("streetButton").addEventListener("click", () =>
        streetViewInfoWindowButtonHandler({
          panoramaSettings,
          coordinates,
          panoramaInstance,
        })
      );
    },
    [gpsButtonHanlder, streetViewInfoWindowButtonHandler]
  );

  const getLoader = () =>
    new Loader({
      apiKey: "AIzaSyDPkAO51Tg4B7LB0DHxRGG3JlomHkRQPGc",
      version: "weekly",
    });

  const createNewMarkers = useCallback(
    ({
      mapInstance,
      panoramaInstance,
      markersLocationsArr,
      htmlStringArr,
      panoramaSettingsArr,
    }) => {
      const latLng = (lat, lng) => new window.google.maps.LatLng(lat, lng);

      const infoWindow = new window.google.maps.InfoWindow({});

      for (let i = 0; i < markersLocationsArr.length; i++) {
        const currentPosition = markersLocationsArr[i];
        const currentHTMLContent = htmlStringArr[i];
        const currentPanoramaSettings = panoramaSettingsArr[i];

        const marker = new window.google.maps.Marker({
          position: latLng(currentPosition[0], currentPosition[1]),
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            scaledSize: { height: 45, width: 45 },
          },
          map: mapInstance,
        });

        marker.addListener("click", () => {
          infoWindow.setContent(currentHTMLContent);
          infoWindow.open({
            anchor: marker,
            map: mapInstance,
            shouldFocus: false,
          });
          infoWindow.addListener("domready", () => {
            addHandlers({
              coordinates: currentPosition,
              panoramaInstance,
              panoramaSettings: currentPanoramaSettings,
            });
          });
          infoWindow.addListener("content_changed", () => {
            window.google.maps.event.clearListeners(infoWindow, "domready");
          });
        });
      }
    },
    [addHandlers]
  );

  const saveMapInstance = useCallback((map) => setMapInstance(map), []);
  const savePanoramaInstance = useCallback(
    (panorama) => setPanoramaInstance(panorama),
    []
  );

  const createMap = useCallback(
    ({ loader }) =>
      loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          const map = new window.google.maps.Map(
            mapContainer.current,
            initialMapSettings
          );
          const panorama = new window.google.maps.StreetViewPanorama(
            mapContainer.current,
            {
              enableCloseButton: true,
              visible: false,
            }
          );

          saveMapInstance(map);
          savePanoramaInstance(panorama);
          createNewMarkers({
            mapInstance: map,
            panoramaInstance: panorama,
            markersLocationsArr,
            htmlStringArr,
            panoramaSettingsArr,
          });
        }
      }),
    [
      createNewMarkers,
      htmlStringArr,
      markersLocationsArr,
      panoramaSettingsArr,
      saveMapInstance,
      savePanoramaInstance,
    ]
  );

  useEffect(() => {
    const loader = getLoader();
    createMap({ loader });
  }, [createMap]);

  return {
    mapContainer,
    mapInstance,
    getLatLng,
    gpsButtonHanlder,
    panoramaInstance,
    streetViewButtonHandler,
  };
};

export default useGoogleMaps;
