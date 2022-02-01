import { Grid } from "@mui/material";
import theme from "theme";

const PageContainer = ({ children }) => {
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="center"
      sx={{
        height: "inherit",
        background: theme.palette.background.light,
        color: theme.palette.text.secondary,
      }}
    >
      <Grid item xs={10} md={9} lg={6} xl={5} sx={{ height: "inherit" }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default PageContainer;
