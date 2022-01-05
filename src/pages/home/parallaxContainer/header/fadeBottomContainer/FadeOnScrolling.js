import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const FadeOnScrolling = ({ currentOpacityValue }) => {
  const FadeOnScrolling = styled(Paper, {
    shouldForwardProp: (prop) => prop !== "currentOpacityValue",
  })(({ currentOpacityValue }) => ({
    width: "100vw",
    height: "20vh",
    backgroundColor: "#000000a1", //"#747474ba",
    opacity: currentOpacityValue,
    position: "relative",
    top: "80vh",
    right: "0",
    bottom: "0",
    left: "0",
  }));

  return (
    <FadeOnScrolling
      currentOpacityValue={currentOpacityValue}
      elevation={16}
      variant="darkShadow"
    />
  );
};

export default FadeOnScrolling;
