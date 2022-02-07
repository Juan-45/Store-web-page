import Container from "./footer/Container";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Container
      container
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Box>
        <Typography
          gutterBottom={true}
          fontFamily="Niconne"
          variant="h2"
          align="center"
        >
          Contáctanos en nuestras redes
        </Typography>
        <Grid container justifyContent="space-evenly" wrap="nowrap">
          <IconButton disableRipple color="primary">
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton disableRipple color="primary">
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton disableRipple color="primary">
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Box>

      <Box>
        <Typography gutterBottom={true}>
          Casa central, Av. Pellegrini 2100
        </Typography>
        <Typography gutterBottom={true}>Info@lorem.com.ar</Typography>
        <Typography gutterBottom={true}>‎+54 9 341 2543-8547</Typography>
      </Box>
    </Container>
  );
};

export default Footer;
