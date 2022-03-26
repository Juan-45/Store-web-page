import { Button } from "@mui/material";
import theme from "theme";

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="contained"
    sx={{
      color: theme.palette.text.primary,
      width: "15%",
      borderRadius: "0",
      flexShrink: "0",
      flexBasis: "content",
      boxShadow: "unset",
    }}
    {...props}
  >
    {children}
  </Button>
);

export default CustomButton;
