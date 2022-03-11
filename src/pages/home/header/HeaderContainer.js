import { Grid } from "@mui/material";

const HeaderContainer = ({ children }) => (
  <Grid
    container
    direction="column"
    justifyContent="flex-end"
    alignItems="center"
    sx={{ height: "100vh", zIndex: "1", position: "relative" }}
  >
    {children}
  </Grid>
);

export default HeaderContainer;
