import { MobileStepper } from "@mui/material";
import theme from "theme";
import { forwardRef } from "react";

const CustomCarouselStepper = ({ isTouchScreen, ...props }, ref) => (
  <MobileStepper
    variant="dots"
    position="static"
    sx={
      !isTouchScreen
        ? {
            "& .MuiMobileStepper-dot:hover": {
              background: theme.palette.primary.dark,
            },
          }
        : {}
    }
    ref={ref}
    {...props}
  />
);

export default forwardRef(CustomCarouselStepper);
