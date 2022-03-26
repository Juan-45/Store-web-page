import { createSearchParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const useNavigation = ({ setElementPosition }) => {
  const navigate = useNavigate();

  const getCategoryButtonHanlder = useCallback(
    (path) => () => {
      navigate(`${path}?orden=nombre%2Cdesc`);
    },
    [navigate]
  );

  const getSubCategoryButtonHanlder = useCallback(
    ({ category, subCategory }) =>
      () => {
        navigate({
          pathname: category,
          search: `?${createSearchParams({
            subCategoria: subCategory,
            orden: "nombre,desc",
          })}`,
        });
        setElementPosition(false);
      },
    [setElementPosition, navigate]
  );

  return {
    getCategoryButtonHanlder,
    getSubCategoryButtonHanlder,
  };
};

export default useNavigation;
