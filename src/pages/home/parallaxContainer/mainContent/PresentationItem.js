import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const PresentationItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#747474",
  color: "white",
  opacity: "80%",
  width: "90%", //On laptop screen %70 causes overflow.
}));

export default PresentationItem;
