import ContentContainer from "./mainContent/ContentContainer";
import PresentationContainer from "./mainContent/PresentationContainer";
import PresentationItem from "./mainContent/PresentationItem";
import ParallaxBackground from "./ParallaxBackground";
import FadeBackground from "./FadeBackground";
import Header from "./Header";

import nuts from "images/nuts.jpg";
import driedFruits from "images/driedFruits.jpg";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Carousel from "./mainContent/Carousel";
import theme from "theme";
import ProductCard from "./mainContent/ProductCard";

const MainContent = () => {
  return (
    <>
      <Header />
      <ContentContainer container img={nuts} spacing={0}>
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
      <ContentContainer container justifyContent="flex-end" img={driedFruits}>
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
          <Typography variant="h3" sx={{ width: "100%" }}>
            Productos destacados
          </Typography>
        </Grid>
        <Box
          sx={{
            background: theme.palette.background.default,
          }}
        >
          <Carousel>
            {[
              {
                title: "Producto N 1",
                price: "$ 254,00",
              },
              {
                title: "Producto N 2",
                price: "$ 678,70",
                minimum: "2",
              },
              {
                title: "Producto N 3",
                price: "$ 247,70",
              },
              {
                title: "Producto N 4",
                price: "$ 587,00",
                minimum: "2",
              },
              {
                title: "Producto N 5",
                price: "$ 200,00",
              },
              {
                title: "Producto N 6",
                price: "$ 278,00",
              },
              {
                title: "Producto N 7",
                price: "$ 890,00",
              },
              {
                title: "Producto N 8",
                price: "$ 1.115,40",
                minimum: "2",
              },
            ].map((item) => {
              return <ProductCard productData={item} key={item.title} />;
            })}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default MainContent;
