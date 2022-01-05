import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { useMemo } from "react";
import "./navBar/navBarFade.css";

const NavBar = ({ children, shouldDisplay }) => {
  const PaperWrapper = useMemo(
    () =>
      styled(Paper)({
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "2",
        height: "20vh",
        width: "calc(100% - 17px)",
        opacity: "1",
        transition: "opacity 0.4s ease",
      }),
    []
  );

  const Container = useMemo(
    () =>
      styled(Grid)({
        position: "relative",
        height: "100%",
        background: "green",
      }),
    []
  );
  return (
    <PaperWrapper
      className={shouldDisplay ? "" : "fade"}
      elevation={16}
      variant="darkShadow"
      square={true}
    >
      <Container>
        <h1>{children}</h1>
      </Container>
    </PaperWrapper>
  );
};

export default NavBar;
