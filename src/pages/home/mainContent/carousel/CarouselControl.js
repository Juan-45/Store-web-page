import CustomCarouselStepper from "./carouselControl/CustomCarouselStepper";
import { forwardRef } from "react";
import BackButton from "./carouselControl/BackButton";
import ForwardButton from "./carouselControl/ForwardButton";
import Container from "./carouselControl/Container";

const CarouselControl = (
  {
    children,
    stepsAmount,
    currentIndex,
    isTouchScreen,
    goBackHandler,
    goForwardHandler,
    shouldDisplayForwardButton,
  },
  ref
) => (
  <>
    <Container>
      {currentIndex > 0 && !isTouchScreen ? (
        <BackButton goBackHandler={goBackHandler} />
      ) : null}
      {children}
      {shouldDisplayForwardButton && !isTouchScreen ? (
        <ForwardButton goForwardHandler={goForwardHandler} />
      ) : null}
    </Container>
    <CustomCarouselStepper
      steps={stepsAmount}
      activeStep={currentIndex}
      ref={ref}
    />
  </>
);

export default forwardRef(CarouselControl);
