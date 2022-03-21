import { Menu } from "@mui/material";

const CustomMenu = ({ children, isTouchScreen, ...props }) => (
  <Menu
    elevation={16}
    variant="blue"
    sx={{
      display: { xs: "block", md: "none" },
      "& .MuiMenu-paper": {
        maxWidth: isTouchScreen ? "100%" : "calc(100% - 16px)",
      },
    }}
    {...props}
  >
    {children}
  </Menu>
);

export default CustomMenu;
