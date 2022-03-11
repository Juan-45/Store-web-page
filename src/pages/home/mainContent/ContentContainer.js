import { Grid } from "@mui/material";

const ContentContainer = ({ children, img, ...props }) => (
  <Grid
    container
    spacing={0}
    sx={{
      //component-style
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "sepia(30%)",
      alignItems: "center",
      //object
      minHeight: "80vh",
      zIndex: "1",
      //object-wrapper
      position: "relative",
    }}
    {...props}
  >
    {children}
  </Grid>
);

export default ContentContainer;
