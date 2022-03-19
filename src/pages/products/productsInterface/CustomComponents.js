import { Grid } from "@mui/material";
import GenericContainer from "components/GenericContainer";

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
  <GenericContainer
    container
    item
    direction="column"
    xs={16}
    sm={12}
    wrap="nowrap"
  >
    {children}
  </GenericContainer>
);

const ProductsContainer = ({ children }) => (
  <Grid container columns="12">
    {children}
  </Grid>
);

export { Container, InnerContainer, ProductsContainer };
