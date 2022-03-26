import { Paper } from "@mui/material";
import "./paperWrapper/PaperWrapperFade.css";
import theme from "theme";

const PaperWrapper = ({
  children,
  shouldDisplay,
  isTouchScreen,
  scrollbarWidth,
}) => {
  return (
    <Paper
      className={shouldDisplay ? "" : "fade"}
      elevation={0}
      square={true}
      sx={{
        height: "fit-content",
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: "2",
        width: isTouchScreen ? "100%" : `calc(100% - ${scrollbarWidth}px)`,
        opacity: "98%",
        transition: "opacity 0.4s ease",
        background: theme.palette.background.light,
        borderBottom: "1px solid #bebebe",
      }}
    >
      {children}
    </Paper>
  );
};

export default PaperWrapper;
