import MobileNavMenu from "./navigationBar/MobileNavMenu";
import Container from "./navigationBar/Container";
import NavButtonsBar from "./navigationBar/NavButtonsBar";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
import useNavigationBar from "./navigationBar/useNavigationBar";
import { Route, Routes } from "react-router-dom";
import ProductsNavBar from "./navigationBar/ProductsNavBar";

const navSettings = [
  { label: "Contacto", path: "contact" },
  { label: "Crear Cuenta", path: "signup" },
  { label: "Nosotros", path: "about" },
  { label: "Sucursales", path: "storepickup" },
  { label: "Productos", path: "products" },
];

const products = [
  { label: "Mermelada de Naranja X 460 g" },
  { label: "Mermelada de Frutilla X 460 g" },
  { label: "Mermelada de Durazno X 460 g" },
  { label: "Yerba Organica x 500 g" },
  { label: "Yerba Mate Libre de Gluten x 500 gr." },
  { label: "Arroz Integral Yamani x 1,25 kg" },
  { label: "Copos Integrales (Trigo, Maíz, Avena, Arroz) x 3 kg" },
];

const categories = [
  { label: "Mix de frutas", name: "fruitMix" },
  { label: "Celíacos", name: "celiac" },
  { label: "Fruta seca", name: "driedFruit" },
  { label: "Gourmet", name: "gourmet" },
  { label: "Desayuno", name: "breakfast" },
  { label: "Especias", name: "spices" },
  { label: "Mas categorías", name: "moreCategories" },
];

const NavigationBar = ({ shouldDisplay }) => {
  const { isTouchScreen } = useCheckTouchScreens();
  const { shouldRemoveComponent } = useNavigationBar(shouldDisplay);

  return (
    <Container shouldDisplay={shouldDisplay} isTouchScreen={isTouchScreen}>
      {shouldRemoveComponent
        ? null
        : [
            <NavButtonsBar navSettings={navSettings} key="NavButtonsBar" />,
            <MobileNavMenu
              navSettings={navSettings}
              isTouchScreen={isTouchScreen}
              key="MobileNavMenu"
            />,
            <Routes key="AutoSearch">
              <Route
                path="products"
                element={
                  <ProductsNavBar products={products} categories={categories} />
                }
              />
            </Routes>,
          ]}
    </Container>
  );
};

export default NavigationBar;
