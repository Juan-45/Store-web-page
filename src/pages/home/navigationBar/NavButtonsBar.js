import Container from "./navButtonsBar/Container";
import NavButton from "./navButtonsBar/NavButton";

const NavButtonsBar = ({ navSettings }) => (
  <Container>
    {navSettings.map((item) => (
      <NavButton buttonSettings={item} key={item.label} />
    ))}
  </Container>
);

export default NavButtonsBar;
