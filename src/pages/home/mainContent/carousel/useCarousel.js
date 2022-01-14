import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import useCheckTouchScreens from "hooks/useCheckTouchScreens";
import useRefCallback from "hooks/useRefCallback";
import { useCallback } from "react";

const useCarousel = (childrenLength) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleOnClick = useCallback((event) => {
    setCurrentIndex(event.target.name);
  }, []);

  console.log(currentIndex);
  const add = useCallback(
    (node) => {
      const childNodes = node.firstChild.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        childNodes[i].addEventListener("click", handleOnClick, false);
        childNodes[i].name = i;
      }
    },
    [handleOnClick]
  );

  const cleanUp = useCallback(
    (currentRef) => {
      const childNodesReferenced = currentRef.firstChild.childNodes;
      for (let i = 0; i < childNodesReferenced.length; i++) {
        childNodesReferenced[i].removeEventListener(
          "click",
          handleOnClick,
          false
        );
      }
    },
    [handleOnClick]
  );

  const [ref] = useRefCallback(add, cleanUp);

  const { isTouchScreen } = useCheckTouchScreens();
  const FIRST_SAMPLE = 1;
  const FRACTIONAL_SAMPLE = 1;

  const isOnXS = useMediaQuery("(min-width:0px)");
  const isOnSM = useMediaQuery("(min-width:800px)");
  const isOnLG = useMediaQuery("(min-width:1366px)");
  const isOnXL = useMediaQuery("(min-width:1920px)");

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
  }, [isOnSM, isOnXL, isOnXS, isOnLG]);

  useEffect(() => {
    const getTranslationSettings = (lengthVal, showVal) => {
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
    };

    const manageTraslateXValue = (settings) => {
      const { translationSettings, FIRST_SAMPLE, currentIndex } = settings;
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
    };
    const translationSettings = getTranslationSettings(childrenLength, show);

    setTranslationSettings(translationSettings);

    manageTraslateXValue({
      translationSettings,
      FIRST_SAMPLE,
      currentIndex,
    });

    const { numberOfCompleteTranslations, translationPorcentage } =
      translationSettings;

    if (translationPorcentage === 0) {
      setStepsAmount(numberOfCompleteTranslations + FIRST_SAMPLE);
      setShouldDisplayForwardButton(
        currentIndex < numberOfCompleteTranslations
      );
    } else {
      setStepsAmount(
        numberOfCompleteTranslations + FIRST_SAMPLE + FRACTIONAL_SAMPLE
      );
      setShouldDisplayForwardButton(
        currentIndex < numberOfCompleteTranslations + FIRST_SAMPLE
      );
    }
  }, [show, currentIndex, childrenLength]);

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
    ref,
  };
};

export default useCarousel;
