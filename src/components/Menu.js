import { styled, Menu } from "@mui/material";
import theme from "theme";

const Root = styled(Menu, {
  shouldForwardProp: (prop) => prop !== "isTouchScreen",
})(({ isTouchScreen }) => ({
  [theme.breakpoints.up("xs")]: { display: "block" },
  [theme.breakpoints.up("md")]: { display: "none" },
  "& .MuiMenu-paper": {
    maxWidth: isTouchScreen ? "100%" : "calc(100% - 16px)",
  },
}));

export default Root;
