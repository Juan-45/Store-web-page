import CustomButton from "./navButton/CustomButton";
import useNavigation from "./navButton/useNavigation";

const NavButton = ({ buttonSettings }) => {
  const { handleClick } = useNavigation(buttonSettings.path);

  return (
    <CustomButton onClick={handleClick}>{buttonSettings.label}</CustomButton>
  );
};

export default NavButton;
