import MobileNavMenu from "./navigationBar/MobileNavMenu";
import Container from "./navigationBar/Container";
import NavButtonsBar from "./navigationBar/NavButtonsBar";
import AutoSearch from "./navigationBar/AutoSearch";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
import useNavigationBar from "./navigationBar/useNavigationBar";

const pages = [
  "Contactos",
  "Suscríbete",
  "Nosotros",
  "Sucursales",
  "Productos",
];

const foods = [
  { label: "Mermelada de Naranja X 460 g" },
  { label: "Mermelada de Frutilla X 460 g" },
  { label: "Mermelada de Durazno X 460 g" },
  { label: "Yerba Organica x 500 g" },
  { label: "Yerba Mate Libre de Gluten x 500 gr." },
  { label: "Arroz Integral Yamani x 1,25 kg" },
  { label: "Copos Integrales (Trigo, Maíz, Avena, Arroz) x 3 kg" },
];

const NavigationBar = ({ shouldDisplay }) => {
  const { isTouchScreen } = useCheckTouchScreens();
  const { shouldRemoveComponent } = useNavigationBar(shouldDisplay);

  return (
    <Container shouldDisplay={shouldDisplay} isTouchScreen={isTouchScreen}>
      {shouldRemoveComponent
        ? null
        : [
            <NavButtonsBar pages={pages} key="NavButtonsBar" />,
            <MobileNavMenu
              pages={pages}
              isTouchScreen={isTouchScreen}
              key="MobileNavMenu"
            />,
            <AutoSearch autocompleteData={foods} key="AutoSearch" />,
          ]}
    </Container>
  );
};

export default NavigationBar;
