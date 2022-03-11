import PageContainer from "components/PageContainer";
import GenericTitle from "components/GenericTitle";
import CityMenu from "./storePicker/CityMenu";
import GoogleMapsContainer from "./storePicker/GoogleMapsContainer";
import LocationsList from "./storePicker/LocationsList";
import {
  InterfaceContainer,
  InterfaceSubContainer,
} from "./storePicker/CustomComponents";
import { useState } from "react";

const StorePicker = () => {
  const [currentCity, setCurrentCity] = useState("pergamino");

  const locationSettings = {
    pergamino: [
      {
        zone: "Centro",
        address: "Pueyrredon 1154",
        phone: "02477-458795",
        key: "key1",
      },
      {
        zone: "Centenario",
        address: "Juan B. Justo 1752",
        phone: "02477-458787",
        key: "key2",
      },
    ],
    rosario: [
      {
        zone: "Centro",
        address: "Pellegrini 3200",
        phone: "0341-4587955",
        key: "key3",
      },
      {
        zone: "Centro",
        address: "Mendoza 204",
        phone: "0341-4587877",
        key: "key4",
      },
      {
        zone: "Zona Sur",
        address: "27 de Febrero 400",
        phone: "0341-4587877",
        key: "key5",
      },
      {
        zone: "Centro",
        address: "Cordoba 1254",
        phone: "0341-4547877",
        key: "key6",
      },
      {
        zone: "Centro",
        address: "Entre Rios 852",
        phone: "0341-4227877",
        key: "key7",
      },
    ],
    junin: [
      {
        zone: "Centro",
        address: "Francia 1457",
        phone: "0236-4581155",
        key: "key8",
      },
      {
        zone: "Centro",
        address: "San Juan 120",
        phone: "0236-4587937",
        key: "key9",
      },
    ],
    buenosAires: [
      {
        zone: "Capital",
        address: "Av. de Mayo 4500",
        phone: "011-42587955",
        key: "key10",
      },
      {
        zone: "Capital",
        address: "Av. Cabildo 2004",
        phone: "011-45487877",
        key: "key11",
      },
      {
        zone: "Capital ",
        address: "27 de Febrero 400",
        phone: "011-45387877",
        key: "key12",
      },
      {
        zone: "Capital",
        address: "Cordoba 1254",
        phone: "011-45478772",
        key: "key13",
      },
      {
        zone: "Capital",
        address: "Av. Cabildo 852",
        phone: "011-42278277",
        key: "key14",
      },
      {
        zone: "Capital",
        address: "Av. Cabildo 1540",
        phone: "011-42274877",
        key: "key15",
      },
      {
        zone: "Capital",
        address: "Entre Rios 852",
        phone: "011-42278877",
        key: "key16",
      },
      {
        zone: "Capital",
        address: "Entre Rios 254",
        phone: "011-42278797",
        key: "key17",
      },
    ],
  };

  const handleClick = (event) => setCurrentCity(event.target.name);

  return (
    <PageContainer>
      <GenericTitle>Encuentra nuestras sucursales</GenericTitle>
      <InterfaceContainer>
        <CityMenu
          handleClick={handleClick}
          cities={[
            { label: "Pergamino", name: "pergamino" },
            { label: "Rosario", name: "rosario" },
            { label: "Junín", name: "junin" },
            { label: "Buenos Aires", name: "buenosAires" },
          ]}
        />
        <InterfaceSubContainer>
          <GoogleMapsContainer />
          <LocationsList locationSettings={locationSettings[currentCity]} />
        </InterfaceSubContainer>
      </InterfaceContainer>
    </PageContainer>
  );
};

export default StorePicker;
