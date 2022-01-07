import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useMemo } from "react";
import "./paperWrapper/PaperWrapperFade.css";

const PaperWrapper = ({ children, shouldDisplay }) => {
  const Wrapper = useMemo(
    () =>
      styled(Paper)(({ theme }) => ({
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "2",
        width: "calc(100% - 16px)",
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
      sx={{ maxHeight: { xs: "14vh", md: "20vh" } }}
    >
      {children}
    </Wrapper>
  );
};

export default PaperWrapper;
