import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material/";

const Container = ({ children }) => {
  const CustomGrid = styled(Grid)(() => ({
    height: "fit-content",
    margin: "13px 0px",
  }));

  return (
    <CustomGrid
      container
      wrap="nowrap"
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: { xs: "none", md: "center" },
        justifyContent: { xs: "initial", md: "center" },
      }}
    >
      {children}
    </CustomGrid>
  );
};

export default Container;
