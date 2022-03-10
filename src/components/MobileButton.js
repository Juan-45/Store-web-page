import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileButton = ({ children, ...props }) => {
  const CustomIconButton = styled(IconButton)(({ theme }) => ({
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[16],
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  }));

  return (
    <CustomIconButton size="small" color="inherit" {...props}>
      {children}
    </CustomIconButton>
  );
};

export default MobileButton;
