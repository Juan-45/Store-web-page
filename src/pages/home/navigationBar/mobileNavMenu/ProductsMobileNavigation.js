import MobileButton from "components/MobileButton";
import StoreIcon from "@mui/icons-material/Store";
import CategoriesMenu from "./productsMobileNavigation/CategoriesMenu";
import useNavigation from "./productsMobileNavigation/useNavigation";
import useMenu from "hooks/useMenu";

const ProductsMobileNavigation = ({
  isTouchScreen,
  categories,
  categoriesTree,
}) => {
  const {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  } = useMenu();

  const { getSubCategoryButtonHandler } = useNavigation({ setElementPosition });

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
