import { styled } from "@mui/material/styles";
import wood from "images/wood.jpg";
import Grid from "@mui/material/Grid";

const ParallaxBackground = styled(Grid)({
  //component-style
  backgroundImage: `url(${wood})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: "brightness(50%)",
  //object
  width: "100vw",
  height: "100vh",
  zIndex: "-1",
  //object-wrapper
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  //speed
  transform: "translateZ(-13px) scale(14.2)",
});

export default ParallaxBackground;
