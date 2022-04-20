import { Grid } from "@mui/material";

const FormRow = ({ children }) => {
  return (
    <Grid
      container
      xs={12}
      wrap="wrap"
      sx={{
        "& > .MuiFormControl-root": {
          width: { xs: "80%", md: "330px" },
          minWidth: "unset",
        },
        "& .MuiFormControl-root:nth-child(1)": {
          marginRight: "50px",
        },
      }}
    >
      {children}
    </Grid>
  );
};

export default FormRow;
