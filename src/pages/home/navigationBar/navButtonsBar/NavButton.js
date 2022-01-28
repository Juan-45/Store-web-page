import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = ({ buttonSettings }) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    width: "20%",
    borderRadius: "0",
  }));

  const navigate = useNavigate();

  const handleClick = () => navigate(buttonSettings.path);

  return (
    <CustomButton variant="contained" onClick={handleClick}>
      {buttonSettings.label}
    </CustomButton>
  );
};

export default NavButton;
