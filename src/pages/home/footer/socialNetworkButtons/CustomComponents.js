import { Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Container = ({ children }) => (
  <Grid container justifyContent="space-evenly" wrap="nowrap">
    {children}
  </Grid>
);

const FacebookIconButton = ({ ...props }) => (
  <IconButton disableRipple color="primary" {...props}>
    <FacebookIcon fontSize="large" />
  </IconButton>
);

const InstagramIconButton = ({ ...props }) => (
  <IconButton disableRipple color="primary" {...props}>
    <InstagramIcon fontSize="large" />
  </IconButton>
);

const TwitterIconButton = ({ ...props }) => (
  <IconButton disableRipple color="primary" {...props}>
    <TwitterIcon fontSize="large" />
  </IconButton>
);

const WhatsappIconButton = ({ ...props }) => (
  <IconButton disableRipple color="primary" {...props}>
    <WhatsAppIcon fontSize="large" />
  </IconButton>
);

export {
  Container,
  FacebookIconButton,
  InstagramIconButton,
  TwitterIconButton,
  WhatsappIconButton,
};
