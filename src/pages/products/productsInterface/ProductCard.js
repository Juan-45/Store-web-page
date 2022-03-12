import { Grid, Box, Typography } from "@mui/material";
import theme from "theme";

const ProductCard = () => (
  <Grid container items xs={6} lg={4} xl={3} justifyContent="center">
    <Box
      sx={{
        width: "100%",
        margin: "10px 10px 0px",
        maxWidth: "300px",
      }}
    >
      <img
        src={"https://via.placeholder.com/300x300"}
        alt="product"
        style={{ maxWidth: "100%" /*maxHeight: "100%"*/ }}
      />
    </Box>

    <Box
      sx={{
        background: "#939393",
        boxSizing: "border-box",
        padding: "15px",
        width: "100%",
        margin: "10px",
        /* maxHeight: "150px",*/
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
        Titulo
      </Typography>
      <Typography
        gutterBottom
        variant="subtitle1"
        sx={{
          fontWeight: "600",
          color: theme.palette.secondary.dark,
        }}
      >
        Precio
      </Typography>
      <Typography
        variant="caption"
        color="secondary"
        sx={{ fontWeight: "600" }}
      >
        Oferta
      </Typography>
    </Box>
  </Grid>
);

export default ProductCard;
