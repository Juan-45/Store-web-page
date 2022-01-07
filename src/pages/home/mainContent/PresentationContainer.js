import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const PresentationContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

export default PresentationContainer;
