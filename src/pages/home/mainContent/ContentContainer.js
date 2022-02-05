import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const ContentContainer = styled(Grid)(({ img }) => ({
  //component-style
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  filter: "sepia(30%)",
  alignItems: "center",
  //object
  minHeight: "80vh",
  zIndex: "1",
  //object-wrapper
  position: "relative",
}));

export default ContentContainer;