import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MobileButton from "../MobileButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect, useMemo } from "react";
//import useCheckTouchScreens from "hooks/useCheckTouchScreens";

const Carousel = ({ children }) => {
  //const { isTouchScreen } = useCheckTouchScreens();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const goForwardHandler = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const goBackHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
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
        shouldForwardProp: (prop) => prop !== "currentIndex",
      })(({ currentIndex }) => ({
        display: "flex",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        transition: "all 600ms ease-in-out",
        transform: `translateX(-${currentIndex * 100}%)`,
      })),
    []
  );

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Box sx={{ display: "flex", width: "100%", position: "relative" }}>
            {currentIndex > 0 && (
              <ButtonContainer
                sx={{
                  left: "24px",
                  "@media (hover: none) and (pointer: coarse)": {
                    display: "none",
                  },
                }}
              >
                <MobileButton onClick={goBackHandler}>
                  <ArrowBackIosNewIcon />
                </MobileButton>
              </ButtonContainer>
            )}
            <Box
              sx={{ overflow: "hidden", width: "100%", height: "100%" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <CarouselContent
                currentIndex={currentIndex}
                sx={{
                  "& > *": {
                    width: "100%",
                    flexShrink: "0",
                    flexGrow: "0",
                  },
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {children}
              </CarouselContent>
            </Box>
            {currentIndex < length - 1 && (
              <ButtonContainer
                sx={{
                  right: "24px",
                  "@media (hover: none) and (pointer: coarse)": {
                    display: "none",
                  },
                }}
              >
                <MobileButton onClick={goForwardHandler}>
                  <ArrowForwardIosIcon />
                </MobileButton>
              </ButtonContainer>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Carousel;
