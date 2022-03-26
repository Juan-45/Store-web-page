import MobileBarContainer from "./mobileNavMenu/MobileBarContainer";
import MobileNavigation from "./mobileNavMenu/MobileNavigation";
import ProductsMobileNavigation from "./mobileNavMenu/ProductsMobileNavigation";
import { Route, Routes } from "react-router-dom";
import { memo } from "react";

const MobileNavMenu = ({
  navSettings,
  categories,
  categoriesTree,
  isTouchScreen,
}) => (
  <MobileBarContainer>
    <MobileNavigation navSettings={navSettings} isTouchScreen={isTouchScreen} />
    <Routes key="ProductsNavBar">
      <Route
        path="productos/*"
        element={
          <ProductsMobileNavigation
            categories={categories}
            categoriesTree={categoriesTree}
            isTouchScreen={isTouchScreen}
          />
        }
      />
    </Routes>
  </MobileBarContainer>
);

export default memo(MobileNavMenu);
