import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MobileButton from "../MobileButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useMediaQuery } from "@mui/material";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
//import MobileStepper from "@mui/material/MobileStepper";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [show, setShow] = useState(1);
  const [translationSettings, setTranslationSettings] = useState({
    translationPorcentage: 0,
    numberOfCompleteTranslations: 0,
  });
  const [currentTraslateXValue, setCurrentTraslateXValue] = useState(0);
  const [shouldDisplayForwardButton, setShouldDisplayForwardButton] =
    useState(true);
  const [stepsAmount, setStepsAmount] = useState(0);

  const { isTouchScreen } = useCheckTouchScreens();

  const isOnXS = useMediaQuery("(min-width:0px)");

  const isOnSM = useMediaQuery("(min-width:800px)");

  const isOnLG = useMediaQuery("(min-width:1366px)");

  const isOnXL = useMediaQuery("(min-width:1920px)");

  const getTranslationSettings = useCallback((lengthVal, showVal) => {
    const getNumberOfCompleteTranslations = (lengthVal, showVal) => {
      const rest = lengthVal - showVal;
      const quotient = rest / showVal;
      return Math.trunc(quotient);
    };

    const getSamplesAmount = (translationAmount) => {
      const FIRST_SAMPLE = 1;
      return translationAmount + FIRST_SAMPLE;
    };

    const numberOfCompleteTranslations = getNumberOfCompleteTranslations(
      lengthVal,
      showVal
    );

    const remainingItems =
      lengthVal - getSamplesAmount(numberOfCompleteTranslations) * showVal;

    const translationPorcentage = (remainingItems / showVal) * 100;

    return {
      translationPorcentage,
      numberOfCompleteTranslations,
    };
  }, []);

  const goForwardHandler = () => {
    if (currentIndex < translationSettings.numberOfCompleteTranslations + 1) {
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
        shouldForwardProp: (prop) =>
          prop !== "show" && prop !== "currentTraslateXValue",
      })(({ show, currentTraslateXValue }) => ({
        display: "flex",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        transition: "all 600ms ease-in-out",
        transform: `translateX(-${currentTraslateXValue}%)`,
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

  console.log("movements", translationSettings.numberOfCompleteTranslations);
  console.log("porcentaje", translationSettings.translationPorcentage);
  console.log("currentIndex", currentIndex);
  console.log("should display button", shouldDisplayForwardButton);
  console.log("steps", stepsAmount);
  // console.log(`translateX(-${currentIndex * currentTraslateXValue}%)`);

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
  useEffect(() => {
    const translationSettings = getTranslationSettings(length, show);
    const { numberOfCompleteTranslations, translationPorcentage } =
      translationSettings;

    const FIRST_SAMPLE = 1;

    const isFinalTranslation =
      currentIndex === numberOfCompleteTranslations + FIRST_SAMPLE;

    if (currentIndex <= numberOfCompleteTranslations) {
      const currentTraslateXValue = currentIndex * 100;
      setCurrentTraslateXValue(currentTraslateXValue);
    } else if (isFinalTranslation) {
      const finalTraslateXValue =
        numberOfCompleteTranslations * 100 + translationPorcentage;
      setCurrentTraslateXValue(finalTraslateXValue);
    }

    setTranslationSettings(getTranslationSettings(length, show));
  }, [length, show, getTranslationSettings, currentIndex]);
  useEffect(() => {
    const { numberOfCompleteTranslations, translationPorcentage } =
      translationSettings;
    let forwardButtonCondition;
    let steps;

    if (translationPorcentage === 0) {
      steps = numberOfCompleteTranslations;
      forwardButtonCondition = currentIndex < steps;
      setStepsAmount(steps);
    } else {
      steps = numberOfCompleteTranslations + 1;
      forwardButtonCondition = currentIndex < steps;
      setStepsAmount(steps);
    }

    setShouldDisplayForwardButton(forwardButtonCondition);
  }, [currentIndex, translationSettings]);

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
                currentTraslateXValue={currentTraslateXValue}
                // currentIndex={currentIndex}
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
            {shouldDisplayForwardButton && !isTouchScreen ? (
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
