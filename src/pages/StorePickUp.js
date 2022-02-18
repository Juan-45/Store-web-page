import PageContainer from "components/PageContainer";
import PageTitle from "components/PageTitle";
import MapContainer from "./storePickUp/MapContainer";
import { useEffect, useRef } from "react";

const StorePickUp = ({ isUserLogged, handler }) => {
  const timerID = useRef();

  useEffect(() => {
    const timer = () => window.setTimeout(() => handler(), 1000);
    if (!isUserLogged) {
      timerID.current = timer();
    }
    return () => window.clearTimeout(timerID.current);
  }, [handler, isUserLogged]);

  return (
    <PageContainer>
      <PageTitle>Encuentra nuestras sucursales</PageTitle>
      {isUserLogged ? <MapContainer /> : null}
    </PageContainer>
  );
};

export default StorePickUp;
