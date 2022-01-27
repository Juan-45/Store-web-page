import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import theme from "theme";

const ProductCard = ({ productData }) => {
  const { title, price, minimum } = productData;
  return (
    <div
      style={{
        padding: 25,
        boxSizing: "border-box",
        height: "fit-content",
      }}
    >
      <Paper elevation={8} square={true} sx={{ background: "unset" }}>
        <img
          src={"https://via.placeholder.com/300x300"}
          alt="placeholder"
          style={{
            height: "auto",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            background: "#dedede",
            boxSizing: "border-box",
            padding: "15px",
            height: "auto",
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
          <Typography
            variant="caption"
            color="secondary"
            sx={{ fontWeight: "600" }}
          >
            {`${price} por ${minimum ? minimum : 1} Kg.`}
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default ProductCard;
