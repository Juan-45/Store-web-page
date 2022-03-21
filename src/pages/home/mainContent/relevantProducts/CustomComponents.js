import { Box, Grid, Typography, styled } from "@mui/material";
import theme from "theme";

const Container = styled(Box)({
  position: "relative",
});

const CarouselContainer = styled(Box)({
  background: theme.palette.background.default,
});

const Title = ({ children }) => (
  <Grid
    container
    sx={{
      height: "20vh",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography variant="h3" sx={{ width: "100%" }} align="center">
      {children}
    </Typography>
  </Grid>
);

export { Container, CarouselContainer, Title };
