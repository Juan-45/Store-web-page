import { Box } from "@mui/material";

import GenericContainer from "components/GenericContainer";

const GoogleMapsContainer = ({ ...props }) => (
  <GenericContainer
    sx={{
      p: "10px",
    }}
    container
    justifyContent="center"
    alignItems="center"
    {...props}
  >
    <Box
      sx={{
        background: "gray",
        display: "flex",
        flexShrink: "0",
        width: { xs: "350px", sm: "450px", lg: "600px" },
        height: { xs: "350px", sm: "450px", lg: "600px" },
      }}
    >
      VENTANA DE GOOGLE MAP
    </Box>
  </GenericContainer>
);

export default GoogleMapsContainer;
