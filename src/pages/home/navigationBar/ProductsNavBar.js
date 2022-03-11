import AutoSearch from "./productsNavBar/AutoSearch";
import {
  Container,
  ButtonGroupContainer,
  CustomButton,
  MenuItemText,
} from "./productsNavBar/CustomComponents";
import { ButtonGroup, MenuItem, Menu } from "@mui/material";
import { useState, useRef } from "react";
import useOutsideClickListener from "hooks/useOutsideClickListener";
import useMenu from "hooks/useMenu";

const ProductsNavBar = ({ products, categories, subCategories }) => {
  const { setElementPosition, elementPosition, handleCloseMenu } = useMenu();
  const [currentSubCategory, setCurrentSubCategory] = useState("mixDeFruta");
  const wrapperRef = useRef(null);
  const closeMenu = () => setElementPosition(false);

  useOutsideClickListener(wrapperRef, closeMenu);
  // const navigate = useNavigate();

  const handleOpenMenu = (e) => {
    setElementPosition(e.currentTarget);
    setCurrentSubCategory(e.currentTarget.name);
  };

  const getOnClickHandler = () => {
    // navigate(currentSettings["path"]);
    setElementPosition(false);
  };

  return (
    <Container>
      <ButtonGroupContainer>
        <ButtonGroup ref={wrapperRef}>
          {categories.map((category) => (
            <CustomButton
              name={category.name}
              key={category.name}
              onMouseEnter={handleOpenMenu}
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
        {subCategories[`${currentSubCategory}`].map((item) => (
          <MenuItem key={item.label} onClick={getOnClickHandler}>
            <MenuItemText>{item.label}</MenuItemText>
          </MenuItem>
        ))}
      </Menu>
      <AutoSearch autocompleteData={products} />
    </Container>
  );
};

export default ProductsNavBar;
