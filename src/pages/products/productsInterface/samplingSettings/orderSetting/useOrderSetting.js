import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const useOrderSetting = (setElementPosition) => {
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
  };

  const handleUpwardOrder = () => {
    const currentQueryParams = getCurrentQueryParams();
    const currentQueryValue = currentQueryParams["orden"];
    const queriesValuesArray = currentQueryValue.split(",");

    queriesValuesArray[1] = upwardOrder ? "desc" : "asc";
    currentQueryParams["orden"] = queriesValuesArray.join(",");

    setSearchParams(currentQueryParams);
    setUpwardOrder((prev) => !prev);
  };

  return {
    orderOption,
    upwardOrder,
    getOrderOptionHandler,
    handleUpwardOrder,
  };
};

export default useOrderSetting;
