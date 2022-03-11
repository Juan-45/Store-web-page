import MobileNavMenu from "./navigationBar/MobileNavMenu";
import Container from "./navigationBar/Container";
import NavButtonsBar from "./navigationBar/NavButtonsBar";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
import useNavigationBar from "./navigationBar/useNavigationBar";
import { Route, Routes } from "react-router-dom";
import ProductsNavBar from "./navigationBar/ProductsNavBar";
import PermanentButtons from "./navigationBar/PermanentButtons";
import SubContainer from "./navigationBar/SubContainer";

const navSettings = [
  { label: "Contacto", path: "contact" },
  { label: "Crear Cuenta", path: "signup" },
  { label: "Nosotros", path: "aboutUs" },
  { label: "Sucursales", path: "storepickup" },
  { label: "Productos", path: "products" },
];

const subCategories = {
  mixDeFruta: [
    { label: "Con pasas", name: "conPasas" },
    { label: "Sin pasas", name: "sinPasas" },
    { label: "Con sal", name: "conSal" },
    { label: "Sin maní", name: "sinMani" },
    { label: "Todos", name: "todos" },
  ],
  celiacos: [
    { label: "Arroz", name: "arroz" },
    { label: "Harinas y pre-mezclas", name: "harinasYPreMezclas" },
    { label: "Pastas", name: "pastas" },
    { label: "Snacks", name: "snacks" },
    { label: "Fruta con chocolate", name: "frutaConChocolate" },
    { label: "Desayuno y merienda", name: "desayunoYMerienda" },
    { label: "Bebidas e infusiones", name: "bebidasEInfusiones" },
  ],
  frutaSeca: [
    { label: "Castañas", name: "castañas" },
    { label: "Pistacho", name: "pistacho" },
    { label: "Almendra", name: "almendra" },
    { label: "Nuez", name: "nuez" },
    { label: "Sin TACC", name: "sinTACC" },
    { label: "Maíz frito", name: "maizFrito" },
    { label: "Mix de frutas secas", name: "mixDeFrutasSecas" },
  ],
  gourmet: [
    { label: "Sushi", name: "sushi" },
    { label: "Fideos y Arroces", name: "fideosYArroces" },
    { label: "Salsas y aderezos", name: "salsasYAderezos" },
    { label: "Mieles y Syrup", name: "mielesYSyrup" },
    { label: "Tés e infusuiones", name: "tesEInfusiones" },
    { label: "Conservas", name: "conservas" },
    { label: "Hongos", name: "hongos" },
  ],
  desayuno: [
    { label: "Granolas y mueslis", name: "granolaYMueslis" },
    { label: "Cereales", name: "cereales" },
    { label: "Dulces", name: "dulces" },
    { label: "Panes y galletitas", name: "panesYGalletitas" },
    { label: "Endulzante", name: "endulzante" },
    { label: "Leches y bebidas vegetales", name: "lecheYBebidasVegetales" },
    { label: "Infusiones", name: "infusiones" },
  ],
  especias: [
    { label: "Para carnes rojas", name: "carnesRojas" },
    { label: "Para carnes blancas", name: "carnesBlancas" },
    { label: "Para pescados", name: "pescados" },
    { label: "Para verduras", name: "verduras" },
    { label: "Para repostería", name: "reposteria" },
    { label: "Para infusiones", name: "infusiones" },
    { label: "Terapeúticas", name: "terapeuticas" },
  ],
  masCategorias: [
    { label: "Semillas", name: "semillas" },
    { label: "Aceites y aderezos", name: "aceitesYAderezo" },
    { label: "Suplementos", name: "suplementos" },
    { label: "Miel", name: "miel" },
    { label: "Orgánico", name: "organico" },
    { label: "Harinas", name: "harinas" },
    { label: "Granos", name: "granos" },
    { label: "Kosher", name: "kosher" },
    { label: "Suplementos deportivos", name: "suplementosDeportivos" },
    { label: "Veganos", name: "veganos" },
    { label: "Almacén", name: "almacen" },
    { label: "Repostería", name: "reposteria" },
    { label: "Cosmética", name: "cosmetica" },
    { label: "Sin azucar", name: "sinAzucar" },
    { label: "Endulzantes", name: "endulzante" },
    { label: "Jugos y bebidas", name: "jugosYBebidas" },
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

const categories = [
  { label: "Mix de frutas", name: "mixDeFruta" },
  { label: "Celíacos", name: "celiacos" },
  { label: "Fruta seca", name: "frutaSeca" },
  { label: "Gourmet", name: "gourmet" },
  { label: "Desayuno", name: "desayuno" },
  { label: "Especias", name: "especias" },
  { label: "Mas categorías", name: "masCategorias" },
];

const NavigationBar = ({ shouldDisplay }) => {
  const { isTouchScreen } = useCheckTouchScreens();
  const { shouldRemoveComponent } = useNavigationBar(shouldDisplay);

  return (
    <Container shouldDisplay={shouldDisplay} isTouchScreen={isTouchScreen}>
      {shouldRemoveComponent
        ? null
        : [
            <SubContainer>
              <PermanentButtons />
              <NavButtonsBar navSettings={navSettings} key="NavButtonsBar" />
              <MobileNavMenu
                navSettings={navSettings}
                subCategories={subCategories}
                categories={categories}
                isTouchScreen={isTouchScreen}
                key="MobileNavMenu"
              />
            </SubContainer>,
            <Routes key="ProductsNavBar">
              <Route
                path="products"
                element={
                  <ProductsNavBar
                    products={products}
                    categories={categories}
                    isTouchScreen={isTouchScreen}
                    subCategories={subCategories}
                  />
                }
              />
            </Routes>,
          ]}
    </Container>
  );
};

export default NavigationBar;
