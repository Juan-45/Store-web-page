import { useParams, useSearchParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const useResetAdvanceSearch = () => {
  const [shouldReset, setShouldReset] = useState(false);
  const params = useParams();
  const [searchParams] = useSearchParams();

  const currentCategory = params["*"];
  const currentSubCategory = searchParams.get("subCategoria");

  const categoryRef = useRef(currentCategory);
  const subCategoryRef = useRef(currentSubCategory);

  useEffect(() => {
    if (
      currentCategory !== categoryRef.current ||
      currentSubCategory !== subCategoryRef.current
    ) {
      setShouldReset(true);
    }
  }, [currentCategory, currentSubCategory]);

  return {
    shouldReset,
    setShouldReset,
  };
};

export default useResetAdvanceSearch;
