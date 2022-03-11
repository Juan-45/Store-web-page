import { Grid } from "@mui/material";

const InterfaceContainer = ({ children }) => (
  <Grid container direction="column" rowGap="20px">
    {children}
  </Grid>
);

const InterfaceSubContainer = ({ children }) => (
  <Grid
    container
    columns="16"
    direction="row-reverse"
    alignItems="flex-start"
    columnGap="20px"
    rowGap="20px"
    sx={{
      flexWrap: { xs: "wrap", sm: "nowrap" },
    }}
  >
    {children}
  </Grid>
);

export { InterfaceContainer, InterfaceSubContainer };
