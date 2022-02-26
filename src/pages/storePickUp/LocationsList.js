import GenericContainer from "components/GenericContainer";
import Location from "./locationsList/Location";

const LocationsList = ({ locationSettings, ...props }) => (
  <GenericContainer
    sx={{
      minHeight: "500px",
      maxHeight: "600px",
      p: "10px",
      overflowY: "scroll",
    }}
    {...props}
  >
    {locationSettings.map((currentLocationSettings) => (
      <Location locationSettings={currentLocationSettings} />
    ))}
  </GenericContainer>
);

export default LocationsList;
