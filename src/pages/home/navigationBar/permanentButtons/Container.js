import { Grid } from "@mui/material";

const Container = ({ children }) => (
  <Grid
    container
    alignItems="center"
    flexWrap="nowrap"
    sx={{
      width: "fit-content",
    }}
  >
    {children}
  </Grid>
);

export default Container;
