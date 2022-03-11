import useMenu from "hooks/useMenu";
import { useNavigate } from "react-router-dom";
import MobileButton from "components/MobileButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomMenu from "components/CustomMenu";
import CustomMenuItem from "components/CustomMenuItem";

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
      <CustomMenu
        anchorEl={elementPosition}
        keepMounted
        open={Boolean(elementPosition)}
        onClose={handleCloseMenu}
        isTouchScreen={isTouchScreen}
      >
        {navSettings.map((item) => (
          <CustomMenuItem
            onClickHandler={getOnClickHandler(item)}
            label={item.label}
          />
        ))}
      </CustomMenu>
    </>
  );
};

export default MobileNavigation;
