import ContentSample from "./mainContent/ContentSample";
import ContentContainer from "./mainContent/ContentContainer";
import PresentationContainer from "./mainContent/PresentationContainer";
import PresentationItem from "./mainContent/PresentationItem";
import ParallaxBackground from "./ParallaxBackground";
import FadeBackground from "./FadeBackground";

import nuts from "images/nuts.jpg";
import driedFruits from "images/driedFruits.jpg";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Carousel from "./mainContent/Carousel";
import theme from "theme";

const MainContent = () => {
  return (
    <>
      <ContentContainer
        container
        alignItems="flex-start"
        img={nuts}
        spacing={0}
      >
        <PresentationContainer container item sm={12} md={6}>
          <PresentationItem elevation={16} variant="darkShadow">
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              sx={{
                p: 5,
              }}
            >
              <Typography variant="h3" gutterBottom={true}>
                Lorem ipsum
              </Typography>
              <Typography paragraph={true} align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                interdum dapibus mauris eget maximus. Suspendisse potenti. Cras
                tristique, erat nec pharetra lobortis, erat urna bibendum erat,
                ac feugiat dolor tortor ac felis. Donec a gravida massa.
              </Typography>
            </Grid>
          </PresentationItem>
        </PresentationContainer>
      </ContentContainer>
      <ContentContainer
        container
        justifyContent="flex-end"
        alignItems="flex-start"
        img={driedFruits}
      >
        <PresentationContainer container item sm={12} md={6}>
          <PresentationItem elevation={16} variant="darkShadow">
            <Grid
              container
              item
              direction="column"
              alignItems="center"
              sx={{
                p: 5,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography variant="h3" gutterBottom={true}>
                Lorem ipsum
              </Typography>
              <Typography paragraph={true} align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                interdum dapibus mauris eget maximus. Suspendisse potenti. Cras
                tristique, erat nec pharetra lobortis, erat urna bibendum erat,
                ac feugiat dolor tortor ac felis. Donec a gravida massa.
              </Typography>
            </Grid>
          </PresentationItem>
        </PresentationContainer>
      </ContentContainer>
      <ParallaxBackground sx={{ top: "270vh" }} />
      <Box
        sx={{
          height: "110vh",
          position: "relative",
        }}
      >
        <FadeBackground />
        <Grid
          container
          sx={{
            height: "20vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" sx={{ width: "100%" }}>
            Productos destacados
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            height: "70vh",
            background: theme.palette.background.default,
            opacity: "90%",
          }}
        >
          <Carousel>
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          </Carousel>
        </Grid>
      </Box>
      <ContentSample>FOOTER</ContentSample>
    </>
  );
};

export default MainContent;
