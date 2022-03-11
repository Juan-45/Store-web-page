import { Box } from "@mui/material/";

const MobileBarContainer = ({ children }) => (
  <Box
    sx={{
      display: { xs: "flex", sm: "none" },
    }}
  >
    {children}
  </Box>
);

export default MobileBarContainer;
