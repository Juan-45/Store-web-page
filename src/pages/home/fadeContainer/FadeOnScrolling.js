import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const FadeOnScrolling = ({ currentOpacityValue, position }) => {
  const Root = styled(Paper, {
    shouldForwardProp: (prop) => prop !== "currentOpacityValue",
  })(({ currentOpacityValue, position }) => ({
    width: "100vw",
    height: "20vh",
    backgroundColor: "#000000a1",
    opacity: currentOpacityValue,
    position: "relative",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    ...position,
  }));

  return (
    <Root
      currentOpacityValue={currentOpacityValue}
      elevation={16}
      variant="darkShadow"
      position={position}
    />
  );
};

export default FadeOnScrolling;
