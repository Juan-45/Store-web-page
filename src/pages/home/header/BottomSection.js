import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const BottomSection = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "isOnLandScape",
})(({ isOnLandScape }) => ({
  height: isOnLandScape ? "25vh" : "20vh",
  width: "80vw",
}));

export default BottomSection;
