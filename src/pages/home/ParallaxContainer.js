import { styled } from "@mui/material/styles";
import { memo } from "react";

const ParallaxContainer = styled("div")({
  perspective: "1px",
  height: "100vh",
  width: "100vw",
  overflowX: "hidden",
  overflowY: "auto",
});

export default memo(ParallaxContainer);
