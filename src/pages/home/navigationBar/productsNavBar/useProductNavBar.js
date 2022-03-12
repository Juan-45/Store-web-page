import { useState, useRef } from "react";
import useOutsideClickListener from "hooks/useOutsideClickListener";
import useMenu from "hooks/useMenu";

const useProductsNavBar = () => {
  const [currentCategory, setCurrentCategory] = useState("mixDeFruta");
  const wrapperRef = useRef(null);
  const { setElementPosition, elementPosition, handleCloseMenu } = useMenu();

  const closeMenu = () => setElementPosition(false);
  useOutsideClickListener(wrapperRef, closeMenu);

  const handleOpenMenu = (e) => {
    setElementPosition(e.currentTarget);
    setCurrentCategory(e.currentTarget.name);
  };

  return {
    elementPosition,
    handleCloseMenu,
    currentCategory,
    handleOpenMenu,
    setElementPosition,
    wrapperRef,
  };
};

export default useProductsNavBar;