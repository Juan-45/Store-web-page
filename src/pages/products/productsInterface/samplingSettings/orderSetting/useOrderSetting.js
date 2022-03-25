import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const useOrderSetting = (setElementPosition, shouldReset, setShouldReset) => {
  const [orderOption, setOrderOption] = useState("nombre");
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

    const getOrderQueryValuesArray = () => {
      const orderQueryValues = searchParams.get("orden");

      return {
        type: orderQueryValues.split(",")[0],
        direction: orderQueryValues.split(",")[1],
      };
    };

    const { type, direction } = getOrderQueryValuesArray(searchParams);

    if (type === "nombre") setOrderOption("Nombre");
    else setOrderOption("Precio");

    if (direction === "desc") setUpwardOrder(false);
    else setUpwardOrder(true);
  }, [shouldReset, searchParams]);

  return {
    orderOption,
    upwardOrder,
    getOrderOptionHandler,
    handleUpwardOrder,
  };
};

export default useOrderSetting;
