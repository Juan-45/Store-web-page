import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const CarouselContent = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "show" && prop !== "currentTraslateXValue",
})(({ show, currentTraslateXValue }) => ({
  display: "flex",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  transition: "all 600ms ease-in-out",
  transform: `translateX(-${currentTraslateXValue}%)`,
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "& > *": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: `${100 / show}%`,
    flexShrink: "0",
    flexGrow: "0",
  },
}));

export default CarouselContent;
