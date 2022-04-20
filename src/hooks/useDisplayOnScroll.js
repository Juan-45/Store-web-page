import { useRef, useState, useEffect, useCallback } from "react";

const useDisplayOnScroll = () => {
  const latestScrollPosition = useRef(0);
  const isScrollingDown = useRef(false);
  const scrollDownDistance = useRef(0);
  const scrollUpDistance = useRef(0);
  const timerID = useRef();
  const [shouldDisplay, setshouldDisplay] = useState(true);
  const [shouldRemove, setShouldRemove] = useState(false);

  const scrollHandler = useCallback((e) => {
    const currentScrollPosition = e.target.scrollTop;
    const viewPortHeight = e.target.clientHeight;
    const toogleRange = viewPortHeight * 0.2;
    const latestRange = Math.abs(
      currentScrollPosition - latestScrollPosition.current
    );
    if (currentScrollPosition > latestScrollPosition.current) {
      latestScrollPosition.current = currentScrollPosition;
      isScrollingDown.current = true;
      scrollDownDistance.current = scrollDownDistance.current + latestRange;
      scrollUpDistance.current = 0;
      if (scrollDownDistance.current >= toogleRange) {
        setshouldDisplay(false);
      }
    } else {
      latestScrollPosition.current = currentScrollPosition;
      isScrollingDown.current = false;
      scrollUpDistance.current = scrollUpDistance.current + latestRange;
      scrollDownDistance.current = 0;
      if (scrollUpDistance.current >= toogleRange) {
        setshouldDisplay(true);
      }
    }
  }, []);
  useEffect(() => {
    const timer = () => window.setTimeout(() => setShouldRemove(true), 500);
    if (!shouldDisplay) {
      timerID.current = timer();
    } else {
      window.clearTimeout(timerID.current);
      setShouldRemove(false);
    }
  }, [shouldDisplay]);
  return {
    shouldDisplay,
    shouldRemove,
    scrollHandler,
  };
};

export default useDisplayOnScroll;
