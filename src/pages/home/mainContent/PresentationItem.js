import { Paper, Grid, Typography } from "@mui/material";
import theme from "theme";

const PresentationItem = ({ title, text }) => (
  <Paper
    sx={{
      backgroundColor: theme.palette.background.default,
      opacity: "80%",
      width: "90%", //On laptop screen %70 causes overflow.
    }}
    elevation={16}
    variant="darkShadow"
  >
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      sx={{
        p: 5,
      }}
    >
      <Typography variant="h3" gutterBottom={true}>
        {title}
      </Typography>
      <Typography paragraph={true} align="justify">
        {text}
      </Typography>
    </Grid>
  </Paper>
);

export default PresentationItem;
