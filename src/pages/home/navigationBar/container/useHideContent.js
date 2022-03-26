import { useEffect, useState, useRef } from "react";

const useHideContent = (shouldDisplay) => {
  const [shouldHide, setShouldHide] = useState(false);
  const timerID = useRef();

  useEffect(() => {
    const timer = () => window.setTimeout(() => setShouldHide(true), 1000);
    if (!shouldDisplay) {
      timerID.current = timer();
    } else {
      window.clearTimeout(timerID.current);
      setShouldHide(false);
    }
  }, [shouldDisplay]);

  return {
    shouldHide,
  };
};

export default useHideContent;
