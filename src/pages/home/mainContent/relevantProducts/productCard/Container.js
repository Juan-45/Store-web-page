import { Paper, Box } from "@mui/material";

const Container = ({ children }) => (
  <Box
    sx={{
      padding: 25,
      boxSizing: "border-box",
      height: "fit-content",
    }}
  >
    <Paper
      elevation={8}
      square={true}
      sx={{
        background: "unset",
        "&:hover": {
          filter: "brightness(90%)",
        },
      }}
    >
      {children}
    </Paper>
  </Box>
);

export default Container;
