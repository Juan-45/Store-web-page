import HomeIcon from "@mui/icons-material/Home";
import MobileButton from "components/MobileButton";
import PersonIcon from "@mui/icons-material/Person";

const PermanentButtonsGroup = ({
  handleHomeButton,
  handleUserOptionsButton,
}) => (
  <>
    <MobileButton sx={{ marginRight: "15px" }} onClick={handleHomeButton}>
      <HomeIcon fontSize="medium" />
    </MobileButton>
    <MobileButton
      sx={{ marginRight: "15px" }}
      onClick={handleUserOptionsButton}
    >
      <PersonIcon fontSize="medium" />
    </MobileButton>
  </>
);

export default PermanentButtonsGroup;
