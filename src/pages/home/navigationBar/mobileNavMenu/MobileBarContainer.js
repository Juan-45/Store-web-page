import { Grid } from "@mui/material/";

const MobileBarContainer = ({ children, sx }) => (
  <Grid
    container
    item
    sx={{
      paddingTop: "13px",
      height: "fit-content",
      width: "fit-content",
      display: { xs: "flex", sm: "none" },
      alignItems: { xs: "center", sm: "none" },
      ...sx,
    }}
  >
    {children}
  </Grid>
);

export default MobileBarContainer;
