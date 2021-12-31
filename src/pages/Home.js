import { styled } from "@mui/material/styles";
import wood from "images/wood.jpg";
import nuts from "images/nuts.jpg";
import driedFruits from "images/driedFruits.jpg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Home = () => {
  const ParallaxContainer = styled("div")({
    perspective: "1px",
    height: "100vh",
    width: "100vw",
    overflowX: "hidden",
    overflowY: "auto",
  });

  const ContentSample = styled("div")({
    backgroundColor: "#504133",
    zIndex: "1",
    height: "6000px",
  });

  const HeaderBackground = styled(Grid)({
    //component-style
    backgroundImage: `url(${wood})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "brightness(50%)",
    //object
    width: "100vw",
    height: "100vh",
    zIndex: "-1",
    //object-wrapper
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    //speed
    transform: "translateZ(-13px) scale(14.2)",
  });

  const ContentContainer = styled(Grid)(({ img }) => ({
    //component-style
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "sepia(30%)",
    //object
    width: "100vw",
    height: "70vh",
    zIndex: "1",
    //object-wrapper
    position: "relative",
  }));

  const PresentationContainer = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  }));

  const SampleHeaderText = styled("p")({
    //component-style
    textAlign: "center",
    paddingTop: "100px",
    margin: "0px",
    boxSizing: "border-box",
    //object
    height: "100vh",
    zIndex: "1",
    //object-wrapper
    position: "relative",
  });

  const PaperContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: "#747474",
    color: "white",
    opacity: "80%",
    width: "70%",
    height: "80%",
  }));

  return (
    <ParallaxContainer>
      <HeaderBackground />
      <SampleHeaderText>Hello wordl</SampleHeaderText>
      <ContentContainer
        container
        alignItems="flex-start"
        img={nuts}
        spacing={0}
      >
        <PresentationContainer container item xs={12} sm={6}>
          <PaperContainer elevation={16} variant="darkShadow">
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
              <h1
                style={{
                  fontSize: "36px",
                }}
              >
                Hello world
              </h1>
              <p
                style={{
                  fontSize: "26px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                interdum dapibus mauris eget maximus. Suspendisse potenti. Cras
                tristique, erat nec pharetra lobortis, erat urna bibendum erat,
                ac feugiat dolor tortor ac felis. Donec a gravida massa. Nunc
                hendrerit tellus vel tellus convallis, et auctor orci imperdiet.
              </p>
            </Grid>
          </PaperContainer>
        </PresentationContainer>
      </ContentContainer>
      <ContentContainer
        container
        justifyContent="flex-end"
        alignItems="flex-start"
        img={driedFruits}
      >
        <PresentationContainer container item xs={12} sm={6}>
          <PaperContainer elevation={16} variant="darkShadow">
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
              <h1
                style={{
                  fontSize: "36px",
                }}
              >
                Hello world
              </h1>
              <p
                style={{
                  fontSize: "26px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                interdum dapibus mauris eget maximus. Suspendisse potenti. Cras
                tristique, erat nec pharetra lobortis, erat urna bibendum erat,
                ac feugiat dolor tortor ac felis. Donec a gravida massa. Nunc
                hendrerit tellus vel tellus convallis, et auctor orci imperdiet.
              </p>
            </Grid>
          </PaperContainer>
        </PresentationContainer>
      </ContentContainer>
      <ContentSample />
    </ParallaxContainer>
  );
};

export default Home;
