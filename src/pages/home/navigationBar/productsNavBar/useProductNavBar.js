import useOutsideClickListener from "hooks/useOutsideClickListener";
import theme from "theme";
import { useMediaQuery } from "@mui/material";
import { useState, useCallback } from "react";
import useMenu from "hooks/useMenu";

const useProductsNavBar = () => {
  const [currentCategory, setCurrentCategory] = useState("mixDeFruta");

  const { setElementPosition, elementPosition, handleCloseMenu } = useMenu();

  const isMatching = useMediaQuery(theme.breakpoints.down("sm"));
  const shouldOpen = Boolean(elementPosition) && !isMatching;

  const closeMenu = useCallback(
    () => setElementPosition(false),
    [setElementPosition]
  );
  const { wrapperRef, menuRef } = useOutsideClickListener(closeMenu);

  const handleOpenMenu = useCallback(
    (e) => {
      setElementPosition(e.currentTarget);
      setCurrentCategory(e.currentTarget.name);
    },
    [setElementPosition]
  );

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
