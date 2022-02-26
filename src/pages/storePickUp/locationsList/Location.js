import { Grid, Typography, Button } from "@mui/material";
import theme from "theme";
import Alert from "components/Alert";
import useAlert from "components/alert/useAlert";

const Location = ({ locationSettings }) => {
  const { zone, address, phone } = locationSettings;

  const { alertSettings, setOpen, setAlertSettings, open, handleClose } =
    useAlert();

  const handleStreetView = () => {
    setOpen(true);
    setAlertSettings({
      title: "Vista en Google StreetView",
      text: `La ventana de Google Map mostrará una vista en StreetView de la ubicación: ${address}`,
    });
  };

  const handleGPS = () => {
    setOpen(true);
    setAlertSettings({
      title: "Ventana GPS",
      text: `Se abrira otra pestaña con Google GPS mostrando la ruta más corta entre la posición actual del usuario y ${address}`,
    });
  };

  return (
    <>
      <Alert
        open={open}
        alertSettings={alertSettings}
        handleClose={handleClose}
      />
      <Grid
        sx={{
          background: theme.palette.secondary.light,
          boxShadow: theme.shadows[4],
          width: "100%",
          marginBottom: "20px",
          p: "5px",
          "&:hover": {
            background: theme.palette.secondary.hover,
          },
        }}
        container
        alignItems="flex-start"
        direction="column"
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
