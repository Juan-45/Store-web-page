import { Grid } from "@mui/material";

const Container = ({ children }) => (
  <Grid
    container
    columns="16"
    columnGap="20px"
    wrap="nowrap"
    alignItems="flex-start"
  >
    {children}
  </Grid>
);

const InnerContainer = ({ children }) => (
  <Grid container item direction="column" xs={16} sm={12} wrap="nowrap">
    {children}
  </Grid>
);

const ProductsContainer = ({ children }) => (
  <Grid container columns="12">
    {children}
  </Grid>
);

export { Container, InnerContainer, ProductsContainer };
