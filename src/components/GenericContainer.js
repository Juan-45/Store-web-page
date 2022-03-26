import { Grid, styled } from "@mui/material";
import theme from "theme";

const GenericContainer = styled(Grid)({
  boxShadow: theme.shadows[0],
  border: theme.borders.main,
  boxSizing: "border-box",
});

export default GenericContainer;
