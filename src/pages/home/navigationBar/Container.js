import { Grid } from "@mui/material/";
import PaperWrapper from "./container/PaperWrapper";

const Container = ({ children, shouldDisplay, isTouchScreen }) => {
  return (
    <PaperWrapper shouldDisplay={shouldDisplay} isTouchScreen={isTouchScreen}>
      <Grid container justifyContent="center">
        <Grid item xs={11} md={9} lg={8} xl={5}>
          <Grid
            container
            item
            sx={{
              flexDirection: {
                xs: "row",
                md: "column",
              },
              justifyContent: {
                xs: "flex-start",
              },
              alignItems: {
                xs: "flex-start",
                md: "center",
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
