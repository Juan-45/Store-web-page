import { useState, useCallback } from "react";

const useMenu = () => {
  const [elementPosition, setElementPosition] = useState();
  const handleOpenMenu = useCallback(
    (e) => setElementPosition(e.currentTarget),
    []
  );
  const handleCloseMenu = useCallback(() => setElementPosition(false), []);

  return {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  };
};

export default useMenu;
