import { Grid } from "@mui/material/";
import PaperWrapper from "./container/PaperWrapper";

const Container = ({ children, shouldDisplay, isTouchScreen }) => {
  return (
    <PaperWrapper shouldDisplay={shouldDisplay} isTouchScreen={isTouchScreen}>
      <Grid container justifyContent="center">
        <Grid item xs={10} md={9} lg={7} xl={6}>
          <Grid
            container
            item
            sx={{
              flexDirection: {
                xs: "row",
                md: "column",
              },
              justifyContent: {
                xs: "space-around",
              },
              alignItems: {
                xs: "flex-start",
              },
              height: "fit-content",
              paddingBottom: {
                xs: "13px",
              },
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default Container;
