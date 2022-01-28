import HomeIcon from "@mui/icons-material/Home";
import MobileButton from "../MobileButton";
import PersonIcon from "@mui/icons-material/Person";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideButtons = ({ sx }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/Store-web-page", { replace: true });
  return (
    <Grid
      container
      alignItems="center"
      flexWrap="nowrap"
      sx={{
        width: "fit-content",
        ...sx,
      }}
    >
      <MobileButton sx={{ marginRight: "15px" }} onClick={handleClick}>
        <HomeIcon fontSize="medium" />
      </MobileButton>
      <MobileButton sx={{ marginRight: "30px" }}>
        <PersonIcon fontSize="medium" />
      </MobileButton>
    </Grid>
  );
};

export default SideButtons;
