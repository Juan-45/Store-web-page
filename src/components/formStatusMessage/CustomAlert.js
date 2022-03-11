import { Alert } from "@mui/material";
import theme from "theme";

const CustomAlert = ({ children, ...props }) => (
  <Alert
    variant="outlined"
    sx={{
      width: { xs: "80%", md: "100%" },
      boxSizing: "border-box",
      background: theme.palette.error.traslucid,
      boxShadow: theme.shadows[16],
      marginBottom: "20px",
    }}
    {...props}
  >
    {children}
  </Alert>
);

export default CustomAlert;
