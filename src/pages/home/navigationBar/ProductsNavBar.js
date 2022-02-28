import AutoSearch from "./productsNavBar/AutoSearch";
import { ButtonGroup, Button, Grid } from "@mui/material";

const ProductsNavBar = ({ products, categories }) => (
  <Grid
    container
    justifyContent="space-between"
    alignItems="flex-start"
    sx={{ marginTop: "10px" }}
  >
    <ButtonGroup variant="contained">
      {categories.map((category) => (
        <Button
          name={category.name}
          key={category.name}
          size="small"
          sx={{ borderRadius: "0", flexShrink: "0", flexBasis: "content" }}
        >
          {category.label}
        </Button>
      ))}
    </ButtonGroup>
    <AutoSearch autocompleteData={products} />
  </Grid>
);

export default ProductsNavBar;
