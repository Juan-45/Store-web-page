import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MobileButton from "../MobileButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect, useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
//import MobileStepper from "@mui/material/MobileStepper";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [show, setShow] = useState(1);
  const { isTouchScreen } = useCheckTouchScreens();

  const isOnXS = useMediaQuery("(min-width:0px)");

  const isOnSM = useMediaQuery("(min-width:800px)");

  const isOnLG = useMediaQuery("(min-width:1366px)");

  const isOnXL = useMediaQuery("(min-width:1920px)");

  const goForwardHandler = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const goBackHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      goForwardHandler();
    }

    if (diff < -5) {
      goBackHandler();
    }

    setTouchPosition(null);
  };

  const ButtonContainer = styled(Box)({
    position: "absolute",
    zIndex: "1",
    top: "50%",
    transform: "translateY(-50%)",
  });

  const CarouselContent = useMemo(
    () =>
      styled(Box, {
        shouldForwardProp: (prop) => prop !== "show" && prop !== "currentIndex",
      })(({ show, currentIndex }) => ({
        display: "flex",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        transition: "all 600ms ease-in-out",
        transform: `translateX(-${currentIndex * (100 / show)}%)`,
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "& > *": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: `${100 / show}%`,
          flexShrink: "0",
          flexGrow: "0",
        },
      })),
    []
  );

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);
  useEffect(() => {
    if (isOnXS) {
      setShow(1);
      setCurrentIndex(0);
    }
    if (isOnSM) {
      setShow(2);
      setCurrentIndex(0);
    }
    if (isOnLG) {
      setShow(3);
      setCurrentIndex(0);
    }
    if (isOnXL) {
      setShow(4);
      setCurrentIndex(0);
    }
  }, [isOnXS, isOnSM, isOnLG, isOnXL]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
              <ButtonContainer
                sx={{
                  left: "17px",
                  /* "@media (hover: none) and (pointer: coarse)": {
                    display: "none",
                  },*/
                }}
              >
                <MobileButton onClick={goBackHandler}>
                  <ArrowBackIosNewIcon />
                </MobileButton>
              </ButtonContainer>
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
                currentIndex={currentIndex}
                /*  sx={{
                  transform: {
                    xs: `translateX(-${currentIndex * 100}%)`,
                    sm: `translateX(-${currentIndex * 50}%)`,
                    lg: `translateX(-${currentIndex * (100 / 3)}%)`,
                    xl: `translateX(-${currentIndex * 25}%)`,
                  },
                }}*/
              >
                {children}
              </CarouselContent>
            </Box>
            {currentIndex < length - show && !isTouchScreen ? (
              <ButtonContainer
                sx={{
                  right: "17px",
                  /* "@media (hover: none) and (pointer: coarse)": {
                    display: "none",
                  },*/
                }}
              >
                <MobileButton onClick={goForwardHandler}>
                  <ArrowForwardIosIcon />
                </MobileButton>
              </ButtonContainer>
            ) : null}
          </Box>
          {/*    <MobileStepper
            variant="dots"
            steps={length}
            position="static"
            activeStep={currentIndex}
            sx={{ maxWidth: 400, flexGrow: 1 }}
   />*/}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Carousel;