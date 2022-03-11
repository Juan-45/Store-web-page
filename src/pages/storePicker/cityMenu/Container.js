import GenericContainer from "components/GenericContainer";

const Container = ({ children }) => (
  <GenericContainer container direction="column" alignItems="flex-start">
    {children}
  </GenericContainer>
);

export default Container;
