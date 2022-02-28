import { Grid, Box } from "@mui/material";
import theme from "theme";

const PageContainer = ({ children, sx }) => {
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
      <Grid item xs={11} md={9} lg={8} xl={5}>
        <Box
          sx={{
            paddingTop: "150px",
            paddingBottom: "200px",
            ...sx,
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageContainer;
