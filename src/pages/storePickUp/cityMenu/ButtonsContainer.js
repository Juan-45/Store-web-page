import { Grid } from "@mui/material";

const ButtonsContainer = ({ children }) => (
  <Grid
    container
    alignItems="flex-start"
    columnGap="10px"
    rowGap="10px"
    sx={{ p: "20px" }}
  >
    {children}
  </Grid>
);

export default ButtonsContainer;
