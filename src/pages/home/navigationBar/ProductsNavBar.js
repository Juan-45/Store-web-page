import AutoSearch from "./productsNavBar/AutoSearch";
import {
  ButtonGroup,
  Button,
  Grid,
  MenuItem,
  Menu,
  // ListItemIcon,
  Typography,
} from "@mui/material";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

//TODO add menu for each item
//TODO add open on hover
const ProductsNavBar = ({ products, categories }) => {
  const [elementPosition, setElementPosition] = useState();
  // const navigate = useNavigate();

  const navSettings = [
    { label: "Contacto Contacto" },
    { label: "Crear Cuenta" },
    { label: "Nosotros" },
    { label: "Sucursales" },
    { label: "Productos" },
  ];

  const handleOpenMenu = (e) => {
    setElementPosition(e.currentTarget);

    console.log(e.currentTarget);
  };
  const handleCloseMenu = () => setElementPosition(false);

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
      >
        {categories.map((category) => (
          <Button
            name={category.name}
            key={category.name}
            size="small"
            sx={{ borderRadius: "0", flexShrink: "0", flexBasis: "content" }}
            onClick={handleOpenMenu}
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
        onClose={handleCloseMenu}
      >
        {navSettings.map((item) => (
          <MenuItem key={item.label} onClick={getOnClickHandler}>
            {/* <ListItemIcon>
              <ArrowForwardIosIcon />
           </ListItemIcon>*/}
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>

      <AutoSearch autocompleteData={products} />
      {/*TODO add Menu like navigationBar for categories on smartphones screens*/}
    </Grid>
  );
};

export default ProductsNavBar;
