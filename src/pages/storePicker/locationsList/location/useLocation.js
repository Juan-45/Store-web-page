const useLocation = ({
  locationSettings,
  centerMap,
  gpsButtonHanlder,
  streetViewButtonHandler,
}) => {
  const { centerMapSettings, panoramaSettings } = locationSettings;
  const { coordinates } = centerMapSettings;

  const handleStreetView = (e) => {
    e.stopPropagation();
    streetViewButtonHandler({
      panoramaSettings,
      coordinates,
    });
  };

  const handleGPS = (e) => {
    e.stopPropagation();
    gpsButtonHanlder({ lat: coordinates[0], lng: coordinates[1] });
  };

  const handleLocationOnClick = () => {
    centerMap(centerMapSettings);
  };
  return {
    handleStreetView,
    handleGPS,
    handleLocationOnClick,
  };
};

export default useLocation;
