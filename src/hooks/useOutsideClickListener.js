import { useEffect } from "react";

/**
 * Hook that runs a callback when clicks outside of the passed ref occur
 */
const useOutsideClickListener = (ref, callback) => {
  useEffect(() => {
    /**
     * Execute callback if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClickListener;
