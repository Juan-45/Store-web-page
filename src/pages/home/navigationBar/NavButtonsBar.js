import Container from "./navButtonsBar/Container";
import NavButton from "./navButtonsBar/NavButton";
import ButtonsContainer from "./navButtonsBar/ButtonsContainer";

const NavButtonsBar = ({ navSettings }) => (
  <Container>
    <ButtonsContainer>
      {navSettings.map((item) => (
        <NavButton buttonSettings={item} key={item.label} />
      ))}
    </ButtonsContainer>
  </Container>
);

export default NavButtonsBar;
