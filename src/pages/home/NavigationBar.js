import MobileNavMenu from "./navigationBar/MobileNavMenu";
import Container from "./navigationBar/Container";
import NavButtonsBar from "./navigationBar/NavButtonsBar";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
import useNavigationBar from "./navigationBar/useNavigationBar";
import { Route, Routes } from "react-router-dom";
import ProductsNavBar from "./navigationBar/ProductsNavBar";
import PermanentButtons from "./navigationBar/PermanentButtons";
import SubContainer from "./navigationBar/SubContainer";
import { memo } from "react";

const navSettings = [
  { label: "Contacto", path: "contacto" },
  { label: "Crear Cuenta", path: "cuenta" },
  { label: "Nosotros", path: "sobreNosotros" },
  { label: "Sucursales", path: "sucursales" },
  {
    label: "Productos",
    path: "productos/mixDeFruta?orden=nombre%2Cdesc",
  },
];

const categories = [
  { label: "Mix de frutas", name: "mixDeFruta", path: "mixDeFruta" },
  { label: "Celíacos", name: "celiacos", path: "celiacos" },
  { label: "Fruta seca", name: "frutaSeca", path: "frutaSeca" },
  { label: "Gourmet", name: "gourmet", path: "gourmet" },
  { label: "Desayuno", name: "desayuno", path: "desayuno" },
  { label: "Especias", name: "especias", path: "especias" },
  { label: "Mas categorías", name: "masCategorias", path: "masCategorias" },
];

const categoriesTree = {
  mixDeFruta: [
    { label: "Con pasas", name: "conPasas", query: "conPasas" },
    { label: "Sin pasas", name: "sinPasas", query: "sinPasas" },
    { label: "Con sal", name: "conSal", query: "conSal" },
    { label: "Sin maní", name: "sinMani", query: "sinMani" },
  ],
  celiacos: [
    { label: "Arroz", name: "arroz", query: "arroz" },
    {
      label: "Harinas y pre-mezclas",
      name: "harinasYPreMezclas",
      query: "harinas",
    },
    { label: "Pastas", name: "pastas", query: "pastas" },
    { label: "Snacks", name: "snacks", query: "snacks" },
    {
      label: "Fruta con chocolate",
      name: "frutaConChocolate",
      query: "frutaChocolate",
    },
    {
      label: "Desayuno y merienda",
      name: "desayunoYMerienda",
      query: "desyunoMeriendas",
    },
    {
      label: "Bebidas e infusiones",
      name: "bebidasEInfusiones",
      query: "bebidasInfusiones",
    },
  ],
  frutaSeca: [
    { label: "Castañas", name: "castañas", query: "castañas" },
    { label: "Pistacho", name: "pistacho", query: "pistacho" },
    { label: "Almendra", name: "almendra", query: "almendra" },
    { label: "Nuez", name: "nuez", query: "nuez" },
    { label: "Sin TACC", name: "sinTACC", query: "sinTACC" },
    { label: "Maíz frito", name: "maizFrito", query: "maizFrito" },
    {
      label: "Mix de frutas secas",
      name: "mixDeFrutasSecas",
      query: "mixFrutasSecas",
    },
  ],
  gourmet: [
    { label: "Sushi", name: "sushi", query: "sushi" },
    {
      label: "Fideos y Arroces",
      name: "fideosYArroces",
      query: "fideosArroces",
    },
    {
      label: "Salsas y aderezos",
      name: "salsasYAderezos",
      query: "salsasYAderezos",
    },
    { label: "Mieles y Syrup", name: "mielesYSyrup", query: "mielesSyrup" },
    { label: "Conservas", name: "conservas", query: "conservas" },
    { label: "Hongos", name: "hongos", query: "hongos" },
  ],
  desayuno: [
    {
      label: "Granolas y mueslis",
      name: "granolaYMueslis",
      query: "granolaMueslis",
    },
    { label: "Cereales", name: "cereales", query: "cereales" },
    { label: "Dulces", name: "dulces", query: "dulces" },
    {
      label: "Panes y galletitas",
      name: "panesYGalletitas",
      query: "panesGalletitas",
    },
    { label: "Endulzante", name: "endulzante", query: "endulzante" },
    {
      label: "Leches y bebidas vegetales",
      name: "lecheYBebidasVegetales",
      query: "lecheBebidasVegetales",
    },
    { label: "Infusiones", name: "infusiones", query: "infusiones" },
  ],
  especias: [
    { label: "Para carnes rojas", name: "carnesRojas", query: "carnesRojas" },
    {
      label: "Para carnes blancas",
      name: "carnesBlancas",
      query: "carnesBlancas",
    },
    { label: "Para pescados", name: "pescados", query: "pescados" },
    { label: "Para verduras", name: "verduras", query: "verduras" },
    { label: "Para repostería", name: "reposteria", query: "reposteria" },
    { label: "Para infusiones", name: "infusiones", query: "infusiones" },
    { label: "Terapeúticas", name: "terapeuticas", query: "terapeuticas" },
  ],
  masCategorias: [
    { label: "Semillas", name: "semillas", query: "semillas" },
    {
      label: "Aceites y aderezos",
      name: "aceitesYAderezo",
      query: "aceitesAderezos",
    },
    { label: "Suplementos", name: "suplementos", query: "suplementos" },
    { label: "Miel", name: "miel", query: "miel" },
    { label: "Orgánico", name: "organico", query: "organico" },
    { label: "Harinas", name: "harinas", query: "harinas" },
    { label: "Granos", name: "granos", query: "granos" },
    { label: "Kosher", name: "kosher", query: "kosher" },
    {
      label: "Suplementos deportivos",
      name: "suplementosDeportivos",
      query: "suplementosDeportivos",
    },
    { label: "Veganos", name: "veganos", query: "veganos" },
    { label: "Almacén", name: "almacen", query: "almacen" },
    { label: "Repostería", name: "reposteria", query: "reposteria" },
    { label: "Cosmética", name: "cosmetica", query: "cosmetica" },
    { label: "Sin azucar", name: "sinAzucar", query: "sinAzucar" },
    { label: "Endulzantes", name: "endulzante", query: "endulzante" },
    { label: "Jugos y bebidas", name: "jugosYBebidas", query: "jugosBebidas" },
  ],
};

const products = [
  { label: "Mermelada de Naranja X 460 g" },
  { label: "Mermelada de Frutilla X 460 g" },
  { label: "Mermelada de Durazno X 460 g" },
  { label: "Yerba Organica x 500 g" },
  { label: "Yerba Mate Libre de Gluten x 500 gr." },
  { label: "Arroz Integral Yamani x 1,25 kg" },
  { label: "Copos Integrales (Trigo, Maíz, Avena, Arroz) x 3 kg" },
];

const NavigationBar = ({ shouldDisplay, scrollbarWidth }) => {
  const { isTouchScreen } = useCheckTouchScreens();
  const { shouldRemoveComponent } = useNavigationBar(shouldDisplay);

  return (
    <Container
      shouldDisplay={shouldDisplay}
      isTouchScreen={isTouchScreen}
      scrollbarWidth={scrollbarWidth}
    >
      {shouldRemoveComponent
        ? null
        : [
            <SubContainer key="NavButtonsBar">
              <PermanentButtons />
              <NavButtonsBar navSettings={navSettings} />
              <MobileNavMenu
                navSettings={navSettings}
                categoriesTree={categoriesTree}
                categories={categories}
                isTouchScreen={isTouchScreen}
              />
            </SubContainer>,
            <Routes key="ProductsNavBar">
              <Route
                path="productos/*"
                element={
                  <ProductsNavBar
                    products={products}
                    categories={categories}
                    isTouchScreen={isTouchScreen}
                    categoriesTree={categoriesTree}
                  />
                }
              />
            </Routes>,
          ]}
    </Container>
  );
};

export default memo(NavigationBar);
