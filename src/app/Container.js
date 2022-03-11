import { Grid } from "@mui/material";

const Container = ({ children }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    sx={{ color: "white" }}
  >
    {children}
  </Grid>
);

export default Container;
