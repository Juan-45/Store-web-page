import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavButton = ({ buttonSettings }) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    width: "15%",
    borderRadius: "0",
    flexShrink: "0",
    flexBasis: "content",
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
