import { useState } from "react";

const useMenu = () => {
  const [elementPosition, setElementPosition] = useState();
  const handleOpenMenu = (e) => setElementPosition(e.currentTarget);
  const handleCloseMenu = () => setElementPosition(false);

  return {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  };
};

export default useMenu;
