import { useRef, useState, useCallback } from "react";

const useDisplayOnScroll = () => {
  const latestScrollPosition = useRef(0);
  const isScrollingDown = useRef(false);
  const scrollDownDistance = useRef(0);
  const scrollUpDistance = useRef(0);
  const [shouldDisplay, setShouldDisplay] = useState(true);

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
        setShouldDisplay(false);
      }
    } else {
      latestScrollPosition.current = currentScrollPosition;
      isScrollingDown.current = false;
      scrollUpDistance.current = scrollUpDistance.current + latestRange;
      scrollDownDistance.current = 0;
      if (scrollUpDistance.current >= toogleRange) {
        setShouldDisplay(true);
      }
    }
  }, []);

  return {
    shouldDisplay,
    scrollHandler,
  };
};

export default useDisplayOnScroll;
