import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const MobileButton = (props) => {
  const CustomIconButton = styled(IconButton)(({ theme }) => ({
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[16],
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  }));

  return (
    <CustomIconButton size="medium" color="inherit" {...props}>
      <MenuIcon />
    </CustomIconButton>
  );
};

export default MobileButton;
