import { useState, useMemo, useCallback } from "react";
import useRefCallback from "hooks/useRefCallback";

const useFade = () => {
  const [opacity, setOpacity] = useState("1");

  const getOpacityValue = (item) => {
    const getIntersectionRatio = (item) => item["intersectionRatio"];
    const getIsIntersecting = (item) => item["isIntersecting"];
    const intersectingRatio = getIntersectionRatio(item).toFixed(1);
    const isIntersecting = getIsIntersecting(item);
    if (isIntersecting) {
      return intersectingRatio;
    } else return "0";
  };

  const options = useMemo(
    () => ({
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }),
    []
  );

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        setOpacity(1.1 - getOpacityValue(entries[0]));
      }, options),
    [options]
  );

  const add = useCallback((arg) => observer.observe(arg), [observer]);
  const cleanup = useCallback((arg) => observer.unobserve(arg), [observer]);
  const [ref] = useRefCallback(add, cleanup);

  return {
    opacity,
    ref,
  };
};

export default useFade;
