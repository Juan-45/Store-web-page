import { Box, Fab, Drawer, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import theme from "theme";

const FloatantButton = ({ handleFlotantButton }) => (
  <Box
    sx={{
      display: { xs: "initial", sm: "none" },
      position: "absolute",
      top: "175px",
      left: "0px",
    }}
  >
    <Fab
      color="primary"
      size="small"
      sx={{ boxShadow: theme.shadows[36], borderRadius: "0px" }}
      onClick={handleFlotantButton}
    >
      <SettingsIcon />
    </Fab>
  </Box>
);

const CustomDrawer = ({ children, open }) => (
  <Drawer
    sx={{
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        color: theme.palette.text.secondary,
        width: 240,
        boxSizing: "border-box",
      },
    }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    {children}
  </Drawer>
);

const DrawerHeader = ({ handleDrawerClose }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    }}
  >
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </Box>
);

export { FloatantButton, CustomDrawer, DrawerHeader };
