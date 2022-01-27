import { Box } from "@mui/material";
import { Grid } from "@mui/material";

const Container = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Container;
