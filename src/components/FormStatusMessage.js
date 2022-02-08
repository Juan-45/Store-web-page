import { Alert } from "@mui/material";
import theme from "theme";

const StatusMessage = ({
  isValid,
  isSubmitted,
  errorMessage,
  successMessage,
}) => {
  return (
    <>
      {isValid ? null : (
        <Alert
          severity="error"
          variant="outlined"
          sx={{
            width: { xs: "80%", md: "100%" },
            boxSizing: "border-box",
            background: theme.palette.error.traslucid,
            boxShadow: theme.shadows[16],
            marginBottom: "20px",
          }}
        >
          {errorMessage}
        </Alert>
      )}
      {isSubmitted && isValid ? (
        <Alert
          severity="success"
          variant="outlined"
          sx={{
            width: { xs: "80%", md: "100%" },
            boxSizing: "border-box",
            background: theme.palette.success.traslucid,
            boxShadow: theme.shadows[16],
            marginBottom: "20px",
          }}
        >
          {successMessage}
        </Alert>
      ) : null}
    </>
  );
};

export default StatusMessage;
