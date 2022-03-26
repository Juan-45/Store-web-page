import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollbar = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(15);
  const { pathname } = useLocation();
  const ref = useRef();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (ref.current) {
      const setScrollToTop = () => ref.current.scrollTo(0, 0);
      if (previousPathnameRef.current !== pathname) {
        setScrollToTop();
      }

      const scrollbarWidth = ref.current.offsetWidth - ref.current.clientWidth;
      setScrollbarWidth(scrollbarWidth);
    }
  }, [ref, pathname]);

  return {
    ref,
    scrollbarWidth,
  };
};

export default useScrollbar;
