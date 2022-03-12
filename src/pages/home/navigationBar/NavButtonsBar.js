import Container from "./navButtonsBar/Container";
import NavButton from "./navButtonsBar/NavButton";
import ButtonsContainer from "./navButtonsBar/ButtonsContainer";
import { memo } from "react";

const NavButtonsBar = ({ navSettings }) => (
  <Container>
    <ButtonsContainer>
      {navSettings.map((item) => (
        <NavButton buttonSettings={item} key={item.label} />
      ))}
    </ButtonsContainer>
  </Container>
);

export default memo(NavButtonsBar);
