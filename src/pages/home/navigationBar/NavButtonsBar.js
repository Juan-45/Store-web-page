import Container from "./navButtonsBar/Container";
import NavButton from "./navButtonsBar/NavButton";
import { Grid } from "@mui/material/";
import theme from "theme";
import SideButtons from "./SideButtons";

const NavButtonsBar = ({ navSettings }) => (
  <Container>
    <SideButtons />
    <Grid
      container
      alignItems="center"
      sx={{
        boxShadow: theme.shadows[16],
        flexWrap: "nowrap",
        width: "unset",
        //  marginRight: "40px",
      }}
    >
      {navSettings.map((item) => (
        <NavButton buttonSettings={item} key={item.label} />
      ))}
    </Grid>
  </Container>
);

export default NavButtonsBar;
