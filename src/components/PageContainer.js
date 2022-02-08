import { Grid, Box } from "@mui/material";
import theme from "theme";

const PageContainer = ({ children }) => {
  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent="center"
      sx={{
        background: theme.palette.background.light,
        color: theme.palette.text.secondary,
        minHeight: "100vh",
      }}
    >
      <Grid item xs={10} md={9} lg={6} xl={5}>
        <Box
          sx={{
            paddingTop: { xs: "156px", md: "158.5px" },
            paddingBottom: "200px",
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageContainer;
