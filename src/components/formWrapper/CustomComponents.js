import { Grid } from "@mui/material";

const Container = ({ children }) => (
  <Grid container alignItems="flex-start">
    {children}
  </Grid>
);

const ButtonContainer = ({ children }) => (
  <Grid item xs={12} alignContent="flex-start">
    {children}
  </Grid>
);

export { Container, ButtonContainer };
