import ButtonContainer from "./ButtonContainer";
import MobileButton from "../../MobileButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ForwardButton = ({ goForwardHandler, ...props }) => {
  return (
    <ButtonContainer
      sx={{
        right: "17px",
      }}
      {...props}
    >
      <MobileButton onClick={goForwardHandler}>
        <ArrowForwardIosIcon />
      </MobileButton>
    </ButtonContainer>
  );
};

export default ForwardButton;
