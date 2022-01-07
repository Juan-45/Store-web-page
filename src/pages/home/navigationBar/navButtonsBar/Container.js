import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material/";

const Container = ({ children }) => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    width: "100%",
    boxShadow: theme.shadows[16],
    height: "6vh",
  }));

  return (
    <CustomGrid
      container
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: { xs: "none", md: "stretch" },
      }}
    >
      {children}
    </CustomGrid>
  );
};

export default Container;
