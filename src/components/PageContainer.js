import { Grid, Box } from "@mui/material";
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
        <Box
          sx={{
            height: "inherit",
            paddingTop: { xs: "156px", md: "158.5px" },
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageContainer;
