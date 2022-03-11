import { Container, SubContainer, Title } from "./footer/CustomComponents";
import { Typography, Box } from "@mui/material";
import SocialNetworkButtons from "./footer/SocialNetworkButtons";

const Footer = () => {
  return (
    <Container>
      <SubContainer>
        <Title>Contáctanos en nuestras redes</Title>
        <SocialNetworkButtons />
      </SubContainer>
      <Box>
        <Typography gutterBottom>Casa central, Av. Pellegrini 2100</Typography>
        <Typography gutterBottom>Info@lorem.com.ar</Typography>
        <Typography gutterBottom>‎+54 9 341 2543-8547</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
