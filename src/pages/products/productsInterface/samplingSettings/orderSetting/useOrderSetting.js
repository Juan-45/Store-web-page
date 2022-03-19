import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const useOrderSetting = (setElementPosition, shouldReset, setShouldReset) => {
  const [orderOption, setOrderOption] = useState("Nombre");
  const [upwardOrder, setUpwardOrder] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const getCurrentQueryParams = () => {
    const currentQueryParams = {};
    searchParams.forEach((value, key) => {
      currentQueryParams[key] = value;
    });

    return currentQueryParams;
  };

  const getOrderOptionHandler = (query) => () => {
    const currentQueryParams = getCurrentQueryParams();
    currentQueryParams["orden"] = `${query},desc`;
    setOrderOption(query);
    setSearchParams(currentQueryParams);
    setElementPosition(false);
    setShouldReset(false);
  };

  const handleUpwardOrder = () => {
    const currentQueryParams = getCurrentQueryParams();
    const currentQueryValue = currentQueryParams["orden"];
    const queriesValuesArray = currentQueryValue.split(",");

    queriesValuesArray[1] = upwardOrder ? "desc" : "asc";
    currentQueryParams["orden"] = queriesValuesArray.join(",");

    setSearchParams(currentQueryParams);
    setUpwardOrder((prev) => !prev);
    setShouldReset(false);
  };

  useEffect(() => {
    if (shouldReset) {
      setOrderOption("Nombre");
      setUpwardOrder(false);
    }
  }, [shouldReset]);

  return {
    orderOption,
    upwardOrder,
    getOrderOptionHandler,
    handleUpwardOrder,
  };
};

export default useOrderSetting;
