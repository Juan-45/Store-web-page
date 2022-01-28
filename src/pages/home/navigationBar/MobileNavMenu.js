import { Grid } from "@mui/material/";
import { MenuItem } from "@mui/material";
import { Menu } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import MobileButton from "../MobileButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideButtons from "./SideButtons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileNavMenu = ({ navSettings, isTouchScreen }) => {
  const [elementPosition, setElementPosition] = useState();
  const navigate = useNavigate();

  const handleOpenMenu = (e) => setElementPosition(e.currentTarget);
  const handleCloseMenu = () => setElementPosition(false);

  const getOnClickHandler = (currentSettings) => () => {
    navigate(currentSettings["path"]);
    setElementPosition(false);
  };

  return (
    <Grid
      container
      item
      sx={{
        paddingTop: "13px",
        height: "fit-content",
        width: "fit-content",
        display: { xs: "flex", md: "none" },
        alignItems: { xs: "center", md: "none" },
      }}
    >
      <MobileButton onClick={handleOpenMenu}>
        <MenuIcon />
      </MobileButton>
      <SideButtons sx={{ marginLeft: "15px" }} />
      <Menu
        elevation={16}
        variant="blue"
        anchorEl={elementPosition}
        keepMounted
        open={Boolean(elementPosition)}
        onClose={handleCloseMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiMenu-paper": {
            maxWidth: isTouchScreen ? "100%" : "calc(100% - 16px)",
          },
        }}
      >
        {navSettings.map((item) => (
          <MenuItem key={item.label} onClick={getOnClickHandler(item)}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <Typography textAlign="center">{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default MobileNavMenu;
