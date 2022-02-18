import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./mapContainer/Map";

const MapContainer = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;

  const render = (status) => {
    console.log(status);
    switch (status) {
      case Status.LOADING:
        return <p>...Loading</p>;
      case Status.FAILURE:
        return <p>Some error occurs</p>;
      case Status.SUCCESS:
        return <Map />;
      default:
        return <p></p>;
    }
  };

  return <Wrapper apiKey={apiKey} render={render} />;
};

export default MapContainer;
