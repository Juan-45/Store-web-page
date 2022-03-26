import { Grid, Typography, Button } from "@mui/material";
import theme from "theme";
import Message from "components/Message";
import useMessage from "components/message/useMessage";

const Location = ({ locationSettings }) => {
  const { zone, address, phone } = locationSettings;

  const { messageSettings, setOpen, setMessageSettings, open, handleClose } =
    useMessage();

  const handleStreetView = (e) => {
    e.stopPropagation();
    setOpen(true);
    setMessageSettings({
      title: "Vista en Google StreetView",
      text: `Se mostrará una vista en StreetView de la ubicación: ${address}`,
    });
  };

  const handleGPS = (e) => {
    e.stopPropagation();
    setOpen(true);
    setMessageSettings({
      title: "Ventana GPS",
      text: `Se abrira otra pestaña con Google GPS mostrando la ruta más corta entre la posición actual del usuario y ${address}`,
    });
  };

  const handleLocation = (e) => {
    setOpen(true);
    setMessageSettings({
      title: "Localización seleccionada",
      text: `Se centrará el mapa en la ubicación: ${address}`,
    });
  };

  return (
    <>
      <Message
        open={open}
        messageSettings={messageSettings}
        handleClose={handleClose}
      />
      <Grid
        sx={{
          boxShadow: theme.shadows[4],
          width: "100%",
          marginBottom: "20px",
          p: "5px",
          "&:hover": {
            background: theme.palette.background.light,
          },
        }}
        container
        alignItems="flex-start"
        direction="column"
        onClick={handleLocation}
      >
        <Grid
          container
          direction="column"
          sx={{ marginBottom: "7px", paddingLeft: "10px", paddingTop: "5px" }}
        >
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              background: theme.palette.primary.light,
              fontWeight: "600",
              p: "3px 0px 0px 3px",
            }}
          >
            {zone}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {address}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {phone}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          wrap="nowrap"
          sx={{ justifyContent: { xs: "flex-start", sm: "space-between" } }}
        >
          <Button
            size="small"
            variant="outlined"
            sx={{ marginRight: { xs: "40px", sm: "0px" } }}
            onClick={handleStreetView}
          >
            Vista
          </Button>
          <Button size="small" variant="outlined" onClick={handleGPS}>
            GPS
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Location;
