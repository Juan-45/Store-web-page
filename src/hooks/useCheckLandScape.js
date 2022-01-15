import { useState, useEffect } from "react";

const useCheckLandScape = () => {
  const [isOnLandScape, setIsOnLandScape] = useState();

  useEffect(() => {
    window.document.addEventListener(
      "orientationChange",
      () => setIsOnLandScape(true),
      false
    );
  }, []);

  return { isOnLandScape };
};

export default useCheckLandScape;
