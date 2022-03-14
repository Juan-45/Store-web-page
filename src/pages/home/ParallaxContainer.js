import { styled } from "@mui/material/styles";

const ParallaxContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMainContentURLPathSetted",
})(({ isMainContentURLPathSetted }) => ({
  perspective: isMainContentURLPathSetted ? "1px" : "unset",
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
  overflowY: "auto",
}));

export default ParallaxContainer;
