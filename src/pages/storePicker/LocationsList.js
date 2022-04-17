import GenericContainer from "components/GenericContainer";
import Location from "./locationsList/Location";

const LocationsList = ({
  locationSettings,
  centerMap,
  gpsButtonHanlder,
  streetViewButtonHandler,
}) => (
  <GenericContainer
    sx={{
      minHeight: "500px",
      maxHeight: "600px",
      p: "10px",
      overflowY: "scroll",
    }}
    item
    xs={16}
    sm={5}
  >
    {locationSettings.map((currentLocationSettings) => (
      <Location
        locationSettings={currentLocationSettings}
        centerMap={centerMap}
        gpsButtonHanlder={gpsButtonHanlder}
        streetViewButtonHandler={streetViewButtonHandler}
        key={currentLocationSettings.key}
      />
    ))}
  </GenericContainer>
);

export default LocationsList;
