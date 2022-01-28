import HomeIcon from "@mui/icons-material/Home";
import MobileButton from "../MobileButton";
import PersonIcon from "@mui/icons-material/Person";
import { Grid } from "@mui/material";

const SideButtons = ({ sx }) => {
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
      <MobileButton sx={{ marginRight: "15px" }}>
        <HomeIcon fontSize="medium" />
      </MobileButton>
      <MobileButton sx={{ marginRight: "30px" }}>
        <PersonIcon fontSize="medium" />
      </MobileButton>
    </Grid>
  );
};

export default SideButtons;
