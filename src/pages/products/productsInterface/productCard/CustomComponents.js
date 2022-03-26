import { Grid, Box, Typography } from "@mui/material";
import theme from "theme";

const Container = ({ children }) => (
  <Grid
    container
    items
    xs={6}
    lg={4}
    xl={3}
    justifyContent="center"
    sx={{
      "&:hover": {
        filter: "brightness(90%)",
      },
    }}
  >
    {children}
  </Grid>
);

const CustomImage = ({ src }) => (
  <Box
    sx={{
      width: "100%",
      margin: "10px 10px 0px",
      maxWidth: "300px",
      background: theme.palette.background.light,
    }}
  >
    <img src={src} alt="product" style={{ maxWidth: "100%" }} />
  </Box>
);

const ProducstDescription = ({ title, price, details }) => (
  <Box
    sx={{
      background: theme.palette.background.light,
      boxSizing: "border-box",
      padding: "15px",
      width: "100%",
      margin: "10px",
      marginTop: "0px",
      maxWidth: "300px",
    }}
  >
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: "600",
        marginBottom: "1rem",
        color: theme.palette.secondary.main,
      }}
    >
      {title}
    </Typography>
    <Typography
      gutterBottom
      variant="subtitle1"
      sx={{
        fontWeight: "600",
        color: theme.palette.secondary.dark,
      }}
    >
      {price}
    </Typography>
    <Typography variant="caption" color="secondary" sx={{ fontWeight: "600" }}>
      {details}
    </Typography>
  </Box>
);

export { Container, CustomImage, ProducstDescription };
