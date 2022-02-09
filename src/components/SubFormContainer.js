import { Grid } from "@mui/material";

const SubFormContainer = ({ children }) => {
  return (
    <Grid container item xs={12} md={6} wrap="wrap">
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        sx={{
          width: { xs: "80%", md: "330px" },
          marginBottom: { xs: "20px", md: "unset" },
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default SubFormContainer;
