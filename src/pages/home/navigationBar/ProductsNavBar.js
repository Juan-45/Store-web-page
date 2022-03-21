import AutoSearch from "./productsNavBar/AutoSearch";
import { Container } from "./productsNavBar/CustomComponents";
import DropDownMenu from "./productsNavBar/DropDownMenu";
import ButtonsBar from "./productsNavBar/ButtonsBar";
import useProductNavBar from "./productsNavBar/useProductNavBar";
import useNavigation from "./productsNavBar/useNavigation";
import { memo } from "react";

const ProductsNavBar = ({ products, categories, categoriesTree }) => {
  const {
    elementPosition,
    shouldOpen,
    handleCloseMenu,
    currentCategory,
    handleOpenMenu,
    setElementPosition,
    wrapperRef,
    menuRef,
  } = useProductNavBar();

  const { getCategoryButtonHanlder, getSubCategoryButtonHanlder } =
    useNavigation({ setElementPosition });

  return (
    <Container>
      <ButtonsBar
        categories={categories}
        handleOpenMenu={handleOpenMenu}
        getCategoryButtonHanlder={getCategoryButtonHanlder}
        ref={wrapperRef}
      />
      <DropDownMenu
        elementPosition={elementPosition}
        shouldOpen={shouldOpen}
        handleCloseMenu={handleCloseMenu}
        categoriesTree={categoriesTree}
        currentCategory={currentCategory}
        getSubCategoryButtonHanlder={getSubCategoryButtonHanlder}
        ref={menuRef}
      />
      <AutoSearch autocompleteData={products} />
    </Container>
  );
};

export default memo(ProductsNavBar);
