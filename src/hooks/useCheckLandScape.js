import { useState, useEffect } from "react";

const useCheckLandScape = () => {
  const [isOnLandScape, setIsOnLandScape] = useState(false);

  useEffect(() => {
    const handleScreenRotation = (event) => {
      const currentRotationAngle = event.currentTarget.angle;
      if (currentRotationAngle === 0) {
        setIsOnLandScape(false);
      } else if (currentRotationAngle === 90 || currentRotationAngle === -90) {
        setIsOnLandScape(true);
      }
    };

    window.screen.orientation.addEventListener(
      "change",
      handleScreenRotation,
      false
    );
  }, []);

  return { isOnLandScape };
};

export default useCheckLandScape;
