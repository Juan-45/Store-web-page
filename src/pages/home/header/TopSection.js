import { Grid, Typography } from "@mui/material";

const TopSection = ({ children, isOnLandScape }) => (
  <Grid
    container
    justifyContent="center"
    alignContent="center"
    sx={{ height: isOnLandScape ? "55vh" : "60vh", width: "80vw" }}
  >
    <Typography variant="h2" align="center">
      {children}
    </Typography>
  </Grid>
);

export default TopSection;
