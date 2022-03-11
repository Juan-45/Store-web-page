import { Typography, Box } from "@mui/material";

const CompanyDescription = ({ children }) => (
  <Typography align="justify" sx={{ marginBottom: "40px" }}>
    {children}
  </Typography>
);

const CompanyHistory = ({ children }) => (
  <Typography align="justify">{children}</Typography>
);

const CompanyName = ({ children }) => (
  <Typography variant="h2" align="center" gutterBottom>
    {children}
  </Typography>
);

const PhotoContainer = ({ src }) => (
  <Box sx={{ marginBottom: "40px" }}>
    <img
      src={src}
      alt="store"
      style={{ filter: "sepia(30%)", width: "100%" }}
    />
  </Box>
);

export { CompanyDescription, CompanyHistory, CompanyName, PhotoContainer };
