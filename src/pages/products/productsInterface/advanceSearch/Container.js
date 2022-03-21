import GenericContainer from "components/GenericContainer";

const Container = ({ children }) => (
  <GenericContainer
    container
    item
    direction="column"
    sx={{ display: { xs: "none", sm: "flex" }, paddingTop: "20px" }}
    xs={4}
    sm={4}
  >
    {children}
  </GenericContainer>
);

export default Container;
