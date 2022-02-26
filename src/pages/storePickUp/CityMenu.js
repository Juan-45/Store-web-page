import GenericContainer from "components/GenericContainer";
import Title from "./cityMenu/Title";
import CityButton from "./cityMenu/CityButton";
import ButtonContainer from "./cityMenu/ButtonsContainer";

const CityMenu = ({ cities, handleClick }) => (
  <GenericContainer container direction="column" alignItems="flex-start">
    <Title />
    <ButtonContainer>
      {cities.map((city) => (
        <CityButton name={city.name} onClick={handleClick}>
          {city.label}
        </CityButton>
      ))}
    </ButtonContainer>
  </GenericContainer>
);

export default CityMenu;
