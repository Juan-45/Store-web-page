import useOutsideClickListener from "hooks/useOutsideClickListener";
import theme from "theme";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import useMenu from "hooks/useMenu";

const useProductsNavBar = () => {
  const [currentCategory, setCurrentCategory] = useState("mixDeFruta");

  const { setElementPosition, elementPosition, handleCloseMenu } = useMenu();

  const isMatching = useMediaQuery(theme.breakpoints.down("sm"));
  const shouldOpen = Boolean(elementPosition) && !isMatching;

  const closeMenu = () => setElementPosition(false);
  const { wrapperRef, menuRef } = useOutsideClickListener(closeMenu);

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
    menuRef,
  };
};

export default useProductsNavBar;
