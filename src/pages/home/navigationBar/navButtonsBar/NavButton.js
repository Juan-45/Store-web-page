import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const NavButton = ({ pageTitle }) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    width: "20%",
    borderRadius: "0",
  }));

  return <CustomButton variant="contained">{pageTitle}</CustomButton>;
};

export default NavButton;
