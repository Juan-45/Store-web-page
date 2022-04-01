import { Box } from "@mui/material";
import { forwardRef } from "react";

import GenericContainer from "components/GenericContainer";

const GoogleMapsContainer = ({ ...props }, ref) => {
  // console.log(ref.current);
  return (
    <GenericContainer
      sx={{
        p: "10px",
      }}
      container
      justifyContent="center"
      alignItems="center"
      item
      xs={16}
      sm={11}
    >
      <Box
        sx={{
          background: "gray",
          display: "flex",
          flexShrink: "0",
          width: { xs: "350px", sm: "450px", lg: "600px" },
          height: { xs: "350px", sm: "450px", lg: "600px" },
        }}
        ref={ref}
      >
        VENTANA DE GOOGLE MAP
      </Box>
    </GenericContainer>
  );
};

export default forwardRef(GoogleMapsContainer);
