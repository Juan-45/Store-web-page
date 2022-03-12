import { useNavigate, createSearchParams } from "react-router-dom";

const useNavigation = ({ setElementPosition }) => {
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
    getSubCategoryButtonHandler,
  };
};

export default useNavigation;
