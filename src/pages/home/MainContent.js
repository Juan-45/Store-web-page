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
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  height: "auto",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 1</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 2</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 3</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 4</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 5</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 6</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 7</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              style={{
                padding: 25,
                boxSizing: "border-box",
                height: "fit-content",
              }}
            >
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  background: "green",
                  boxSizing: "border-box",
                  padding: "15px",
                  maxWidth: "300px",
                }}
              >
                <h2>Producto N 8</h2>
                <p style={{ fontSize: "1.3rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default MainContent;
