import { Grid } from "@mui/material/";
import { Typography } from "@mui/material";
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
              height: {
                md: "13vh",
              },
            }}
          >
            {children}
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: "6vh", paddingTop: { xs: "13px", md: "0px" } }}
          >
            <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
          </Grid>
        </Grid>
      </Grid>
    </PaperWrapper>
  );
};

export default Container;
