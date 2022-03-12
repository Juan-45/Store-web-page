import { useState, useRef } from "react";
import useOutsideClickListener from "hooks/useOutsideClickListener";
import useMenu from "hooks/useMenu";
import { createSearchParams, useNavigate } from "react-router-dom";

const useProductsNavBar = () => {
  const [currentCategory, setCurrentCategory] = useState("mixDeFruta");
  const wrapperRef = useRef(null);
  const { setElementPosition, elementPosition, handleCloseMenu } = useMenu();
  const navigate = useNavigate();

  const closeMenu = () => setElementPosition(false);
  useOutsideClickListener(wrapperRef, closeMenu);

  const handleOpenMenu = (e) => {
    setElementPosition(e.currentTarget);
    setCurrentCategory(e.currentTarget.name);
  };

  const getCategoryButtonHanlder = (path) => () => {
    navigate(path);
  };

  const getSubCategoryButtonHanlder =
    ({ category, subCategory }) =>
    () => {
      navigate({
        pathname: category,
        search: `?${createSearchParams({
          subCategoria: subCategory,
        })}`,
      });
      setElementPosition(false);
    };

  return {
    elementPosition,
    handleCloseMenu,
    currentCategory,
    handleOpenMenu,
    getCategoryButtonHanlder,
    getSubCategoryButtonHanlder,
    wrapperRef,
  };
};

export default useProductsNavBar;
