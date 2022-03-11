import { Grid, Typography } from "@mui/material";

const BottomSection = ({ children, isOnLandScape }) => (
  <Grid
    container
    justifyContent="center"
    alignContent="center"
    sx={{ height: isOnLandScape ? "25vh" : "20vh", width: "80vw" }}
  >
    <Typography paragraph={true} align="center" sx={{ margin: "0px" }}>
      {children}
    </Typography>
  </Grid>
);

export default BottomSection;
