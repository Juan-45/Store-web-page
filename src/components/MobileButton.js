import { IconButton } from "@mui/material";

const MobileButton = ({ children, ...props }) => {
  return (
    <IconButton size="small" color="inherit" variant="mobile" {...props}>
      {children}
    </IconButton>
  );
};

export default MobileButton;
