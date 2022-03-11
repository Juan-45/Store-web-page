import Container from "./cityMenu/Container";
import Title from "./cityMenu/Title";
import CityButton from "./cityMenu/CityButton";
import ButtonContainer from "./cityMenu/ButtonsContainer";

const CityMenu = ({ cities, handleClick }) => (
  <Container>
    <Title>Elige una ciudad</Title>
    <ButtonContainer>
      {cities.map((city) => (
        <CityButton name={city.name} onClick={handleClick} key={city.name}>
          {city.label}
        </CityButton>
      ))}
    </ButtonContainer>
  </Container>
);

export default CityMenu;
