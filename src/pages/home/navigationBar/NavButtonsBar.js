import Container from "./navButtonsBar/Container";
import NavButton from "./navButtonsBar/NavButton";

const NavButtonsBar = ({ pages }) => (
  <Container>
    {pages.map((page) => (
      <NavButton pageTitle={page} key={page} />
    ))}
  </Container>
);

export default NavButtonsBar;
