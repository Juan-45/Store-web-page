import useGoogleMaps from "hooks/useGoogleMaps";
import "Map.css";

const Map = () => {
  const locationSettings = [
    {
      position: { lat: -32.950849, lng: -60.676095 },
      pov: { heading: 15, pitch: 0 },
      zoom: 2,
      adress: "Av. Pellegrini 3676",
      title: "Rosario 1",
      contact: "+54-9-341-5645782",
    },
    {
      position: { lat: -32.948202, lng: -60.654138 },
      pov: { heading: 75, pitch: 10 },
      zoom: 2,
      adress: "Bv. Oroño 1157",
      title: "Rosario 2",
      contact: "+54-9-341-1457412",
    },
    {
      position: { lat: -32.966602, lng: -60.647773 },
      pov: { heading: 70, pitch: 0 },
      zoom: 1,
      adress: "Blvd. 27 de Febrero 1400",
      title: "Rosario 3",
      contact: "+54-9-341-4678275",
    },
    {
      position: { lat: -32.96949, lng: -60.667983 },
      pov: { heading: 70, pitch: -5 },
      zoom: 3,
      adress: "Av. Ovidio Lagos 3126",
      title: "Rosario 4",
      contact: "+54-9-341-8655982",
    },
  ];

  const mapSettings = {
    locationSettings,
    center: { lat: -32.959256, lng: -60.660423 },
    zoom: 14,
    iconSetting: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      scaledSize: { height: 45, width: 45 },
    },
    withStreetView: true,
    withGps: true,
    withInfoWindow: true,
  };

  const { ref } = useGoogleMaps(mapSettings);

  return (
    <div id="mapContainer">
      <div ref={ref} id="map" />
    </div>
  );
};

export default Map;
