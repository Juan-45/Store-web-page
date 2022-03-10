import SideButtons from "./SideButtons";
import MobileBarContainer from "./mobileNavMenu/MobileBarContainer";
import MobileNavigation from "./mobileNavMenu/MobileNavigation";
import ProductsMobileNavigation from "./mobileNavMenu/ProductsMobileNavigation";
import { Route, Routes } from "react-router-dom";

const MobileNavMenu = ({
  navSettings,
  categories,
  subCategories,
  isTouchScreen,
}) => {
  return (
    <MobileBarContainer>
      <MobileNavigation
        navSettings={navSettings}
        isTouchScreen={isTouchScreen}
      />
      <Routes key="ProductsNavBar">
        <Route
          path="products"
          element={
            <ProductsMobileNavigation
              categories={categories}
              subCategories={subCategories}
              isTouchScreen={isTouchScreen}
            />
          }
        />
      </Routes>
      <SideButtons sx={{ marginLeft: "15px" }} />
    </MobileBarContainer>
  );
};

export default MobileNavMenu;
