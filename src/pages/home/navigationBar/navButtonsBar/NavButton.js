import CustomButton from "./navButton/CustomButton";
import { useNavigate } from "react-router-dom";

const NavButton = ({ buttonSettings }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(buttonSettings.path);

  return (
    <CustomButton onClick={handleClick}>{buttonSettings.label}</CustomButton>
  );
};

export default NavButton;
