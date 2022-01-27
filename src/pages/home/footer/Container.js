import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import theme from "theme";

const Container = styled(Grid)({
  backgroundColor: theme.palette.background.dark,
  zIndex: "1",
  height: "50vh",
  padding: "40px",
  boxSizing: "border-box",
});

export default Container;
