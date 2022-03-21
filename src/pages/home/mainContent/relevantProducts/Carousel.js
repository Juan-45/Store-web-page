import Container from "./carousel/Container";
import CarouselControl from "./carousel/CarouselControl";
import CarouselContent from "./carousel/CarouselContent";
import useCarousel from "./carousel/useCarousel";

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
    ref,
  } = useCarousel(children.length);

  return (
    <Container>
      <CarouselControl
        stepsAmount={stepsAmount}
        currentIndex={currentIndex}
        isTouchScreen={isTouchScreen}
        goBackHandler={goBackHandler}
        goForwardHandler={goForwardHandler}
        shouldDisplayForwardButton={shouldDisplayForwardButton}
        ref={ref}
      >
        <CarouselContent
          show={show}
          currentTraslateXValue={currentTraslateXValue}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {children}
        </CarouselContent>
      </CarouselControl>
    </Container>
  );
};

export default Carousel;
