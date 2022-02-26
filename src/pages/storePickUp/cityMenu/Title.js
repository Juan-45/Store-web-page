import { Box, Typography } from "@mui/material";
import theme from "theme";

const Title = () => (
  <Box
    sx={{
      width: "100%",
      marginBottom: "20px",
    }}
  >
    <Box
      sx={{
        p: "10px 20px 10px 15px",
        width: "fit-content",
        border: "1px",
        borderBottomRightRadius: "25px",
        background: theme.palette.primary.light,
      }}
    >
      <Typography variant="h6">Elige una ciudad</Typography>
    </Box>
  </Box>
);

export default Title;
