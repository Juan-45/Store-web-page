import PageContainer from "components/PageContainer";
import GenericTitle from "components/GenericTitle";
import CityMenu from "./storePicker/CityMenu";
import GoogleMapsContainer from "./storePicker/GoogleMapsContainer";
import LocationsList from "./storePicker/LocationsList";
import {
  InterfaceContainer,
  InterfaceSubContainer,
} from "./storePicker/CustomComponents";
import useStorePicker from "./storePicker/useStorePicker";

const StorePicker = () => {
  const {
    locationSettings,
    currentCity,
    mapContainer,
    gpsButtonHanlder,
    streetViewButtonHandler,
    centerMap,
    handleClick,
    cities,
  } = useStorePicker();

  return (
    <PageContainer>
      <GenericTitle>Encuentra nuestras sucursales</GenericTitle>
      <InterfaceContainer>
        <CityMenu handleClick={handleClick} cities={cities} />
        <InterfaceSubContainer>
          <GoogleMapsContainer ref={mapContainer} />
          <LocationsList
            locationSettings={locationSettings[currentCity]}
            centerMap={centerMap}
            gpsButtonHanlder={gpsButtonHanlder}
            streetViewButtonHandler={streetViewButtonHandler}
          />
        </InterfaceSubContainer>
      </InterfaceContainer>
    </PageContainer>
  );
};

export default StorePicker;
