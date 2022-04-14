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
import useGoogleMaps from "hooks/useGoogleMaps";
//import { forwardRef } from "react";

const StorePicker = () => {
  const [currentCity, setCurrentCity] = useState("pergamino");
  const { mapContainer, mapInstance, getLatLng /*, setNewMarkersGroup */ } =
    useGoogleMaps();
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
        address: "Av. Pastor Bauman 120",
        phone: "0236-4581155",
        key: "key8",
      },
      {
        zone: "Centro",
        address: "Av. Arias 120",
        phone: "0236-4587937",
        key: "key9",
      },
    ],
    buenosAires: [
      {
        zone: "Palermo",
        address: "Av. de Mayo 982",
        phone: "011-42587955",
        key: "key10",
      },
      {
        zone: "Palermo",
        address: "Av. Cabildo 2004",
        phone: "011-45487877",
        key: "key11",
      },
      {
        zone: "Nueva Pompeya ",
        address: "Av. Gral. Francisco Fernández de la Cruz 2950",
        phone: "011-45387877",
        key: "key12",
      },
      {
        zone: "Palermo",
        address: "Cordoba 1228",
        phone: "011-45478772",
        key: "key13",
      },
      {
        zone: "Palermo",
        address: "Av. Cabildo 852",
        phone: "011-42278277",
        key: "key14",
      },
      {
        zone: "Palermo",
        address: "Av. Cabildo 1540",
        phone: "011-42274877",
        key: "key15",
      },
      {
        zone: "Palermo",
        address: "Entre Rios 872",
        phone: "011-42278877",
        key: "key16",
      },
      {
        zone: "Palermo",
        address: "Entre Rios 254",
        phone: "011-42278797",
        key: "key17",
      },
    ],
  };

  const cities = [
    { label: "Pergamino", name: "pergamino" },
    { label: "Rosario", name: "rosario" },
    { label: "Junín", name: "junin" },
    { label: "Buenos Aires", name: "buenosAires" },
  ];

  const markerSettings = {
    pergamino: {
      centerMapSettings: {
        zoom: 15,
        coordinates: [-33.89757502194482, -60.576089323497705],
      },

      markers: [
        [-33.891928, -60.578678],
        [-33.90490724488811, -60.57927677879034],
      ],
    },
    rosario: {
      centerMapSettings: {
        zoom: 14,
        coordinates: [-32.95633855876173, -60.64643750261955],
      },
      markers: [
        [-32.952007252462764, -60.669575886508134],
        [-32.953665280919026, -60.62706570185155],
        [-32.9693499809984, -60.63369767074301],
        [-32.94605642700096, -60.64028240235162],
        [-32.946479022465596, -60.64112418233984],
      ],
    },

    junin: {
      centerMapSettings: {
        zoom: 15,
        coordinates: [-34.593050778852046, -60.94940006911426],
      },
      markers: [
        [-34.596278680522786, -60.959656068380475],
        [-34.59129331602334, -60.94148510366818],
      ],
    },
    buenosAires: {
      centerMapSettings: {
        zoom: 12,
        coordinates: [-34.608144544295335, -58.422340407345644],
      },
      markers: [
        [-34.60895191956675, -58.38004263073937],
        [-34.56292561789363, -58.456084803540364],
        [-34.65906253041514, -58.44203213435343],
        [-34.599145770499064, -58.384829459807285],
        [-34.56973889884847, -58.445487929755146],
        [-34.56673255869329, -58.45145302542204],
        [-34.618721543410715, -58.39161330757574],
      ],
    },
  };

  const centerMapOnCity = (centerMapSettings) => {
    const { zoom, coordinates } = centerMapSettings;
    mapInstance.setCenter(getLatLng(coordinates[0], coordinates[1]));
    mapInstance.setZoom(zoom);
  };

  const handleClick = (event) => {
    setCurrentCity(event.target.name);
    centerMapOnCity(markerSettings[event.target.name].centerMapSettings);
    //setNewMarkersGroup(markerSettings[event.target.name]);
  };

  return (
    <PageContainer>
      <GenericTitle>Encuentra nuestras sucursales</GenericTitle>
      <InterfaceContainer>
        <CityMenu handleClick={handleClick} cities={cities} />
        <InterfaceSubContainer>
          <GoogleMapsContainer ref={mapContainer} />
          <LocationsList locationSettings={locationSettings[currentCity]} />
        </InterfaceSubContainer>
      </InterfaceContainer>
    </PageContainer>
  );
};

export default StorePicker;
