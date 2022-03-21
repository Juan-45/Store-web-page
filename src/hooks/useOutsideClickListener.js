import { useEffect, useRef } from "react";

/**
 * Hook that runs a callback when clicks outside of the passed ref occur
 */
const useOutsideClickListener = (callback) => {
  const wrapperRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    /**
     * Execute callback if clicked on outside of element
     */
    const handleOutsideMouseOver = (event) => {
      if (wrapperRef.current && menuRef.current) {
        if (
          !wrapperRef.current.contains(event.target) &&
          !menuRef.current.contains(event.target)
        ) {
          callback();
        }
      }
    };
    // Bind the event listener
    document.addEventListener("mouseover", handleOutsideMouseOver);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseover", handleOutsideMouseOver);
    };
  }, [wrapperRef, menuRef, callback]);

  return {
    wrapperRef,
    menuRef,
  };
};

export default useOutsideClickListener;
