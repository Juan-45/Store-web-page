import { Box } from "@mui/material";

const CarouselContent = ({
  children,
  show,
  currentTraslateXValue,
  ...props
}) => (
  <Box
    sx={{
      overflow: "hidden",
      width: "100%",
      height: "100%",
      minWidth: "100px",
    }}
    {...props}
  >
    <Box
      sx={{
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
      }}
    >
      {children}
    </Box>
  </Box>
);

export default CarouselContent;
