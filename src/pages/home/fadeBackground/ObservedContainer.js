import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

const ObservedContainer = ({ children }, ref) => {
  const Root = styled("div")({
    height: "100vh",
    position: "absolute",
    top: "0",
    zIndex: "-1",
  });

  return <Root ref={ref}>{children}</Root>;
};

export default forwardRef(ObservedContainer);
