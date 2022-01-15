import { /*useState, */ useEffect } from "react";

const useCheckLandScape = () => {
  useEffect(() => {
    window.document.addEventListener(
      "orientationchange",
      () => alert(window.orientation),
      false
    );
  }, []);
};

export default useCheckLandScape;
