import MobileButton from "components/MobileButton";
import StoreIcon from "@mui/icons-material/Store";
import CategoriesMenu from "./productsMobileNavigation/CategoriesMenu";
import useProductsMobileNavigation from "./productsMobileNavigation/useProductsMobileNavigation";

const ProductsMobileNavigation = ({
  isTouchScreen,
  categories,
  categoriesTree,
}) => {
  const {
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
    getSubCategoryButtonHandler,
  } = useProductsMobileNavigation();

  return (
    <>
      <MobileButton sx={{ marginLeft: "15px" }} onClick={handleOpenMenu}>
        <StoreIcon />
      </MobileButton>
      <CategoriesMenu
        isTouchScreen={isTouchScreen}
        elementPosition={elementPosition}
        handleCloseMenu={handleCloseMenu}
        categories={categories}
        categoriesTree={categoriesTree}
        getSubCategoryButtonHandler={getSubCategoryButtonHandler}
      />
    </>
  );
};

export default ProductsMobileNavigation;
