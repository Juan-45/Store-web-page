import AutoSearch from "./productsNavBar/AutoSearch";
import {
  Container,
  ButtonGroupContainer,
  CustomButton,
  MenuItemText,
} from "./productsNavBar/CustomComponents";
import { ButtonGroup, MenuItem, Menu } from "@mui/material";
import useProductNavBar from "./productsNavBar/useProductNavBar";

const ProductsNavBar = ({ products, categories, categoriesTree }) => {
  const {
    elementPosition,
    handleCloseMenu,
    currentCategory,
    handleOpenMenu,
    getCategoryButtonHanlder,
    getSubCategoryButtonHanlder,
    wrapperRef,
  } = useProductNavBar();

  return (
    <Container>
      <ButtonGroupContainer>
        <ButtonGroup ref={wrapperRef}>
          {categories.map((category) => (
            <CustomButton
              name={category.name}
              key={category.name}
              onMouseEnter={handleOpenMenu}
              onClick={getCategoryButtonHanlder(category.path)}
            >
              {category.label}
            </CustomButton>
          ))}
        </ButtonGroup>
      </ButtonGroupContainer>
      <Menu
        elevation={16}
        anchorEl={elementPosition}
        keepMounted
        open={Boolean(elementPosition)}
        variant="navMenu"
        onMouseLeave={handleCloseMenu}
      >
        {categoriesTree[`${currentCategory}`].map((subCategory) => (
          <MenuItem
            key={subCategory.label}
            onClick={getSubCategoryButtonHanlder({
              category: currentCategory,
              subCategory: subCategory.query,
            })}
          >
            <MenuItemText>{subCategory.label}</MenuItemText>
          </MenuItem>
        ))}
      </Menu>
      <AutoSearch autocompleteData={products} />
    </Container>
  );
};

export default ProductsNavBar;
