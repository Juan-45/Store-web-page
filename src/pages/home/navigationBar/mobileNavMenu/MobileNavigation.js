import useMenu from "hooks/useMenu";
import { useNavigate } from "react-router-dom";
import MobileButton from "components/MobileButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, ListItemIcon, Typography } from "@mui/material";
import Menu from "components/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MobileNavigation = ({ isTouchScreen, navSettings }) => {
  const {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  } = useMenu();
  const navigate = useNavigate();

  const getOnClickHandler = (currentSettings) => () => {
    navigate(currentSettings["path"]);
    setElementPosition(false);
  };

  return (
    <>
      <MobileButton onClick={handleOpenMenu}>
        <MenuIcon />
      </MobileButton>
      <Menu
        elevation={16}
        variant="blue"
        anchorEl={elementPosition}
        keepMounted
        open={Boolean(elementPosition)}
        onClose={handleCloseMenu}
        isTouchScreen={isTouchScreen}
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
    </>
  );
};

export default MobileNavigation;
