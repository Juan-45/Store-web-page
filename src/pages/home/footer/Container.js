import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import theme from "theme";

const Container = styled(Grid)({
  backgroundColor: theme.palette.background.dark,
  zIndex: "1",
  padding: "40px",
  boxSizing: "border-box",
  minHeight: "500px",
});

export default Container;
