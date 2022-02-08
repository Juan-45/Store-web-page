import { Typography, Grid } from "@mui/material";
import theme from "theme";

const PageTitle = ({ text }) => {
  //SPECS Should be wrapper in a Grid container
  return (
    <Grid item xs={12} sx={{ marginBottom: "25px" }}>
      <Typography
        variant="h3"
        gutterBottom
        align="left"
        sx={{
          paddingLeft: "25px",
          paddingBottom: "5px",
          borderBottom: "2px solid",
          borderBottomColor: theme.palette.ternary.main,
        }}
      >
        {text}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
