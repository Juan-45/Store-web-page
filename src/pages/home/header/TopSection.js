import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const TopSection = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "isOnLandScape",
})(({ isOnLandScape }) => ({
  height: isOnLandScape ? "55vh" : "60vh",
  width: "80vw",
}));

export default TopSection;
