import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material/";

const Container = ({ children }) => {
  const CustomGrid = styled(Grid)(({ theme }) => ({
    width: "100%",
    boxShadow: theme.shadows[16],
    height: "fit-content",
    margin: "13px 0px",
  }));

  return (
    <CustomGrid
      container
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: { xs: "none", md: "center" },
      }}
    >
      {children}
    </CustomGrid>
  );
};

export default Container;
