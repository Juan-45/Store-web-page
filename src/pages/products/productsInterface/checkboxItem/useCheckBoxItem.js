import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useCheckBoxItem = ({ shouldReset, manageQueries, value, queryKey }) => {
  const [checked, setChecked] = useState(false);
  const [searchParams] = useSearchParams();

  const handleCheckbox = (e) => {
    manageQueries(e.target.checked, e.target.value);
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    if (shouldReset) {
      setChecked(false);
    }

    const getValueMatchQuery = () => {
      const currentQueryValue = searchParams.get(queryKey);

      if (currentQueryValue) {
        return currentQueryValue
          .split(",")
          .find((queryValue) => queryValue === value)
          ? true
          : false;
      }
    };

    const valueMatchQuery = getValueMatchQuery();

    if (valueMatchQuery) {
      setChecked(true);
    }
  }, [shouldReset, value, queryKey, searchParams]);

  return { checked, handleCheckbox };
};

export default useCheckBoxItem;
