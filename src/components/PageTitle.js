import { Typography, Grid } from "@mui/material";
import theme from "theme";

const PageTitle = ({ children }) => {
  //SPECS Should be wrapper in a Grid container
  return (
    <Grid item xs={12} sx={{ marginBottom: "30px" }}>
      <Typography
        variant="h3"
        align="left"
        sx={{
          paddingLeft: "25px",
          paddingBottom: "5px",
          borderBottom: "2px solid",
          borderBottomColor: theme.palette.ternary.main,
        }}
      >
        {children}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
