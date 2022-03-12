import { Box, Typography } from "@mui/material";
import theme from "theme";

const ProductDescription = ({ title, price, minimum }) => (
  <Box
    sx={{
      background: "#dedede",
      boxSizing: "border-box",
      padding: "15px",
      maxHeight: "150px",
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
      {`${price} por ${minimum ? minimum : 1} Kg.`}
    </Typography>
  </Box>
);

export default ProductDescription;
