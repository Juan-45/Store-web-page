import useMenu from "hooks/useMenu";
import { useNavigate, createSearchParams } from "react-router-dom";

const useProductsMobileNavigation = () => {
  const {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  } = useMenu();
  const navigate = useNavigate();

  const getSubCategoryButtonHandler =
    ({ categoryPath, subCategoryQuery }) =>
    () => {
      navigate({
        pathname: categoryPath,
        search: `?${createSearchParams({
          subCategoria: subCategoryQuery,
        })}`,
      });
      setElementPosition(false);
    };

  return {
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
    getSubCategoryButtonHandler,
  };
};

export default useProductsMobileNavigation;
