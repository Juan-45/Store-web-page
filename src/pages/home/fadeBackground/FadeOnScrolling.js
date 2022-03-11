import Paper from "@mui/material/Paper";

const FadeOnScrolling = ({ currentOpacityValue, position, isOnLandScape }) => (
  <Paper
    elevation={16}
    variant="darkShadow"
    sx={{
      width: "100vw",
      height: isOnLandScape ? "25vh" : "20vh",
      backgroundColor: "#000000a1",
      opacity: currentOpacityValue,
      position: "relative",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      ...position,
    }}
  />
);

export default FadeOnScrolling;
