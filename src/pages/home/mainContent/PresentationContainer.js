import { Grid } from "@mui/material";
import theme from "theme";

const PresentationContainer = ({ children }) => (
  <Grid
    container
    item
    sm={12}
    md={6}
    sx={{
      padding: theme.spacing(1),
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </Grid>
);

export default PresentationContainer;
