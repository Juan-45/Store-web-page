import useOutsideClickListener from "hooks/useOutsideClickListener";
import theme from "theme";
import { useMediaQuery } from "@mui/material";
import { useState, useRef } from "react";
import useMenu from "hooks/useMenu";

const useProductsNavBar = () => {
  const [currentCategory, setCurrentCategory] = useState("mixDeFruta");
  const wrapperRef = useRef(null);
  const { setElementPosition, elementPosition, handleCloseMenu } = useMenu();

  const isMatching = useMediaQuery(theme.breakpoints.down("sm"));
  const shouldOpen = Boolean(elementPosition) && !isMatching;

  const closeMenu = () => setElementPosition(false);
  useOutsideClickListener(wrapperRef, closeMenu);

  const handleOpenMenu = (e) => {
    setElementPosition(e.currentTarget);
    setCurrentCategory(e.currentTarget.name);
  };

  return {
    elementPosition,
    shouldOpen,
    handleCloseMenu,
    currentCategory,
    handleOpenMenu,
    setElementPosition,
    wrapperRef,
  };
};

export default useProductsNavBar;
