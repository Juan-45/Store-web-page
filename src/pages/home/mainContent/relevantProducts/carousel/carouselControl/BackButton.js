import ButtonContainer from "./ButtonContainer";
import MobileButton from "components/MobileButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const BackButton = ({ goBackHandler, ...props }) => {
  return (
    <ButtonContainer
      sx={{
        left: "-40px",
      }}
      {...props}
    >
      <MobileButton onClick={goBackHandler}>
        <ArrowBackIosNewIcon />
      </MobileButton>
    </ButtonContainer>
  );
};

export default BackButton;
