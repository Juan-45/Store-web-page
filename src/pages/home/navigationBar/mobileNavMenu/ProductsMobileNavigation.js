import MobileButton from "components/MobileButton";
import StoreIcon from "@mui/icons-material/Store";
import useMenu from "hooks/useMenu";
import CategoriesMenu from "./productsMobileNavigation/CategoriesMenu";

const ProductsMobileNavigation = ({
  isTouchScreen,
  categories,
  subCategories,
}) => {
  const {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  } = useMenu();

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
        subCategories={subCategories}
        setElementPosition={setElementPosition}
      />
    </>
  );
};

export default ProductsMobileNavigation;
