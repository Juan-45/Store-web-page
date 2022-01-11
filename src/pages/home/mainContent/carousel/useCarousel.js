import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@mui/material";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";

const useCarousel = (childrenLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(childrenLength);
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
  const FIRST_SAMPLE = 1;
  const FRACTIONAL_SAMPLE = 1;

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

  // Set the length to match current children from props
  useEffect(() => {
    setLength(childrenLength);
  }, [childrenLength]);

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
      steps = numberOfCompleteTranslations + FIRST_SAMPLE;
      forwardButtonCondition = currentIndex < numberOfCompleteTranslations;
      setStepsAmount(steps);
    } else {
      steps = numberOfCompleteTranslations + FIRST_SAMPLE + FRACTIONAL_SAMPLE;
      forwardButtonCondition =
        currentIndex < numberOfCompleteTranslations + FIRST_SAMPLE;
      setStepsAmount(steps);
    }

    setShouldDisplayForwardButton(forwardButtonCondition);
  }, [currentIndex, translationSettings]);

  return {
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
  };
};

export default useCarousel;
