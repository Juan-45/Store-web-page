import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MobileButton from "../MobileButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect, useMemo } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const goForwardHandler = () => {
    if (currentIndex < length /* - show*/) {
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
      styled(Box)({
        display: "flex",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        transition: "all 600ms ease-in-out",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }),
    []
  );

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

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
            {currentIndex > 0 && (
              <ButtonContainer
                sx={{
                  left: "17px",
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
              sx={{ overflow: "hidden", width: "100%", minWidth: "100px" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <CarouselContent
                //show={show}
                currentIndex={currentIndex}
                sx={{
                  transform: {
                    xs: `translateX(-${currentIndex * 100}%)`,
                    sm: `translateX(-${currentIndex * 50}%)`,
                    lg: `translateX(-${currentIndex * (100 / 3)}%)`,
                    xl: `translateX(-${currentIndex * 25}%)`,
                  },
                }}
              >
                {children.map((item) => (
                  <Box
                    /*container
                justifyContent="center"*/
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: {
                        xs: "100%",
                        sm: "50%",
                        lg: `${100 / 3}%`,
                        xl: "25%",
                      },
                      flexShrink: "0",
                      flexGrow: "0",
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </CarouselContent>
            </Box>
            {currentIndex < length /*- show*/ && (
              <ButtonContainer
                sx={{
                  right: "17px",
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