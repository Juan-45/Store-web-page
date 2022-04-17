import { Grid, Typography, Button } from "@mui/material";
import theme from "theme";
import useLocation from "./location/useLocation";

const Location = ({
  locationSettings,
  centerMap,
  gpsButtonHanlder,
  streetViewButtonHandler,
}) => {
  const { zone, address, phone } = locationSettings;

  const { handleStreetView, handleGPS, handleLocationOnClick } = useLocation({
    locationSettings,
    centerMap,
    gpsButtonHanlder,
    streetViewButtonHandler,
  });

  return (
    <>
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
        onClick={handleLocationOnClick}
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
