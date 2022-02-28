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
        display: { xs: "none", sm: "flex" },
        alignItems: { xs: "none", sm: "center" },
        justifyContent: { xs: "initial", sm: "space-between" },
      }}
    >
      {children}
    </CustomGrid>
  );
};

export default Container;
