import MobileButton from "components/MobileButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomMenu from "components/CustomMenu";
import CustomMenuItem from "components/CustomMenuItem";
import useMenu from "hooks/useMenu";
import useNavigation from "./mobileNavigation/useNavigation";

const MobileNavigation = ({ isTouchScreen, navSettings }) => {
  const {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  } = useMenu();

  const { getOnClickHandler } = useNavigation({ setElementPosition });

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
            key={item.label}
          />
        ))}
      </CustomMenu>
    </>
  );
};

export default MobileNavigation;
