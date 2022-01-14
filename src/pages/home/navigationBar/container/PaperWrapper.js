import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useMemo } from "react";
import "./paperWrapper/PaperWrapperFade.css";

const PaperWrapper = ({ children, shouldDisplay, isTouchScreen }) => {
  const Wrapper = useMemo(
    () =>
      styled(Paper, {
        shouldForwardProp: (prop) => prop !== "isTouchScreen",
      })(({ theme, isTouchScreen }) => ({
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "2",
        width: isTouchScreen ? "100%" : "calc(100% - 16px)",
        opacity: "95%",
        transition: "opacity 0.4s ease",
        background: theme.palette.background.default,
      })),
    []
  );

  return (
    <Wrapper
      className={shouldDisplay ? "" : "fade"}
      elevation={16}
      variant="darkShadow"
      square={true}
      isTouchScreen={isTouchScreen}
      sx={{
        height: "fit-content",
      }}
    >
      {children}
    </Wrapper>
  );
};

export default PaperWrapper;
