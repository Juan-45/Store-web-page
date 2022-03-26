import { Grid } from "@mui/material";

const Container = ({ children }) => (
  <Grid
    container
    item
    direction="column"
    sx={{
      display: { xs: "none", sm: "flex" },
      paddingTop: "20px",
    }}
    xs={4}
    sm={4}
  >
    {children}
  </Grid>
);

export default Container;
