import { styled } from "@mui/material/styles";

const ParallaxContainer = styled("div")({
  perspective: "1px",
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
  overflowY: "auto",
});

export default ParallaxContainer;
