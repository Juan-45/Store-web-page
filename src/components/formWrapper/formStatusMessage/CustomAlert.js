import { Alert } from "@mui/material";
import theme from "theme";

const CustomAlert = ({ children, severity }) => (
  <Alert
    variant="outlined"
    severity={severity}
    sx={{
      width: { xs: "80%", md: "100%" },
      boxSizing: "border-box",
      background: theme.palette[severity].traslucid,
      boxShadow: theme.shadows[16],
      marginBottom: "20px",
    }}
  >
    {children}
  </Alert>
);

export default CustomAlert;
