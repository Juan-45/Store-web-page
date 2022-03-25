import { Typography, Grid, Box, Button } from "@mui/material";
import { forwardRef } from "react";

const Container = ({ children }) => (
  <Grid
    container
    justifyContent="space-between"
    alignItems="flex-start"
    sx={{ marginTop: "10px", flexBasis: { xs: "420px", sm: "initial" } }}
  >
    {children}
  </Grid>
);

const ButtonGroupContainer = forwardRef(({ children }, ref) => (
  <Box
    sx={{
      display: { xs: "none", sm: "inline-flex" },
      marginBottom: "10px",
    }}
    ref={ref}
  >
    {children}
  </Box>
));

const CustomButton = ({ children, ...props }) => (
  <Button
    size="small"
    sx={{ borderRadius: "0", flexShrink: "0", flexBasis: "content" }}
    {...props}
  >
    {children}
  </Button>
);

const MenuItemText = ({ children }) => (
  <Typography textAlign="center" variant="body2">
    {children}
  </Typography>
);

export { Container, ButtonGroupContainer, CustomButton, MenuItemText };
