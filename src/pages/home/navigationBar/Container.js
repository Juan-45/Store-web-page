import { Grid } from "@mui/material/";
import PaperWrapper from "./container/PaperWrapper";

const Container = ({
  children,
  shouldDisplay,
  isTouchScreen,
  scrollbarWidth,
}) => {
  return (
    <PaperWrapper
      shouldDisplay={shouldDisplay}
      isTouchScreen={isTouchScreen}
      scrollbarWidth={scrollbarWidth}
    >
      <Grid container justifyContent="center">
        <Grid item xs={11} md={9} lg={8} xl={7}>
          <Grid
            container
            item
            sx={{
              flexDirection: {
                xs: "row",
                md: "column",
              },
              justifyContent: {
                xs: "space-between",
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
