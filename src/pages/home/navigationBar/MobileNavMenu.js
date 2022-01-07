import { Grid } from "@mui/material/";
import { MenuItem } from "@mui/material";
import { Menu } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography } from "@mui/material";
import MobileButton from "./mobileNavMenu/MobileButton";
import { useState } from "react";

const MobileNavMenu = ({ pages }) => {
  const [elementPosition, setElementPosition] = useState();
  const handleOpenMenu = (e) => setElementPosition(e.currentTarget);
  const handleCloseMenu = () => setElementPosition(false);

  return (
    <Grid
      container
      item
      sx={{
        paddingTop: "10px",
        height: "6vh",
        width: "fit-content",
        display: { xs: "flex", md: "none" },
        alignItems: { xs: "center", md: "none" },
      }}
    >
      <MobileButton onClick={handleOpenMenu} />
      <Menu
        elevation={16}
        variant="blue"
        anchorEl={elementPosition}
        keepMounted
        open={Boolean(elementPosition)}
        onClose={handleCloseMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseMenu}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};

export default MobileNavMenu;
