import { Grid } from "@mui/material";

const SubContainer = ({ children }) => (
  <Grid
    container
    item
    wrap="nowrap"
    sx={{
      justifyContent: "space-between",
      paddingTop: "13px",
      marginRight: "30px",
      height: "fit-content",
      width: { xs: "fit-content", sm: "100%" },
    }}
  >
    {children}
  </Grid>
);

export default SubContainer;
