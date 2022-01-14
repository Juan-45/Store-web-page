import { Box } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Container from "./carousel/Container";
import BackButton from "./carousel/BackButton";
import ForwardButton from "./carousel/ForwardButton";
import CarouselContent from "./carousel/CarouselContent";
import useCarousel from "./carousel/useCarousel";
import useRefCallback from "hooks/useRefCallback";
import { useCallback } from "react";

const Carousel = ({ children }) => {
  const {
    currentIndex,
    show,
    currentTraslateXValue,
    shouldDisplayForwardButton,
    stepsAmount,
    isTouchScreen,
    handleTouchStart,
    handleTouchMove,
    goForwardHandler,
    goBackHandler,
  } = useCarousel(children.length);

  const add = useCallback((node) => {
    const nodeList = node.firstChild.childNodes;
    nodeList.forEach((element) => {
      element.addEventListener("click", () => console.log("dot clicked"));
    });
  }, []);

  const cleanUp = useCallback((currentRef) => {
    currentRef = null;
  }, []);

  const [ref] = useRefCallback(add, cleanUp);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
          width: "100%",
          position: "relative",
          paddingX: "68px",
        }}
      >
        {currentIndex > 0 && !isTouchScreen ? (
          <BackButton goBackHandler={goBackHandler} />
        ) : null}
        <Box
          sx={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
            minWidth: "100px",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <CarouselContent
            show={show}
            currentTraslateXValue={currentTraslateXValue}
          >
            {children}
          </CarouselContent>
        </Box>
        {shouldDisplayForwardButton && !isTouchScreen ? (
          <ForwardButton goForwardHandler={goForwardHandler} />
        ) : null}
      </Box>
      <MobileStepper
        variant="dots"
        steps={stepsAmount}
        position="static"
        activeStep={currentIndex}
        ref={ref}
      />
    </Container>
  );
};

export default Carousel;