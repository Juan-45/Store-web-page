import { Box } from "@mui/material/";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        margin: "13px 0px",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
