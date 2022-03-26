import { useNavigate, createSearchParams } from "react-router-dom";
import { useCallback } from "react";

const useNavigation = ({ setElementPosition }) => {
  const navigate = useNavigate();

  const getSubCategoryButtonHandler = useCallback(
    ({ categoryPath, subCategoryQuery }) =>
      () => {
        navigate({
          pathname: categoryPath,
          search: `?${createSearchParams({
            subCategoria: subCategoryQuery,
            orden: "nombre,desc",
          })}`,
        });
        setElementPosition(false);
      },
    [navigate, setElementPosition]
  );

  return {
    getSubCategoryButtonHandler,
  };
};

export default useNavigation;
