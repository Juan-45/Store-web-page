import { Grid, Box, Typography } from "@mui/material";
import theme from "theme";

const Container = ({ children }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="space-evenly"
    sx={{
      backgroundColor: theme.palette.background.dark,
      zIndex: "1",
      padding: "40px",
      boxSizing: "border-box",
      minHeight: "500px",
    }}
  >
    {children}
  </Grid>
);

const SubContainer = ({ children }) => (
  <Box sx={{ marginBottom: "20px" }}>{children}</Box>
);

const Title = ({ children }) => (
  <Typography
    gutterBottom={true}
    fontFamily="Niconne"
    variant="h2"
    align="center"
  >
    {children}
  </Typography>
);

export { Container, SubContainer, Title };
