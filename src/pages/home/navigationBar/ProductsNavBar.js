import AutoSearch from "./productsNavBar/AutoSearch";
import {
  ButtonGroup,
  Button,
  Grid,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
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
    <Grid
      container
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ marginTop: "10px", flexBasis: { xs: "420px", sm: "initial" } }}
    >
      <ButtonGroup
        variant="contained"
        sx={{
          display: { xs: "none", sm: "inline-flex" },
          marginBottom: "10px",
        }}
        ref={wrapperRef}
      >
        {categories.map((category) => (
          <Button
            name={category.name}
            key={category.name}
            size="small"
            sx={{ borderRadius: "0", flexShrink: "0", flexBasis: "content" }}
            onMouseEnter={handleOpenMenu}
          >
            {category.label}
          </Button>
        ))}
      </ButtonGroup>
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
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <AutoSearch autocompleteData={products} />
    </Grid>
  );
};

export default ProductsNavBar;
