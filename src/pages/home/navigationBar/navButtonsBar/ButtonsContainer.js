import { Grid } from "@mui/material/";
import theme from "theme";

const ButtonsContainer = ({ children }) => (
  <Grid
    container
    alignItems="center"
    sx={{
      boxShadow: theme.shadows[4],
      flexWrap: "nowrap",
      width: "unset",
    }}
  >
    {children}
  </Grid>
);

export default ButtonsContainer;
