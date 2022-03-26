import { Box } from "@mui/material";
import theme from "theme";

const ProductImage = ({ src }) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "300px",
      background: theme.palette.background.light,
    }}
  >
    <img src={src} alt="product" />
  </Box>
);

export default ProductImage;
