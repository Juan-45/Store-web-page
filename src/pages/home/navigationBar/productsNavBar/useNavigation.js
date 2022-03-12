import { createSearchParams, useNavigate } from "react-router-dom";

const useNavigation = ({ setElementPosition }) => {
  const navigate = useNavigate();

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
    getCategoryButtonHanlder,
    getSubCategoryButtonHanlder,
  };
};

export default useNavigation;
