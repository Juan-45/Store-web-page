import { useSearchParams } from "react-router-dom";

const useAdvanceSearch = (setShouldReset) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getCurrentQueryParams = () => {
    const currentQueryParams = {};
    searchParams.forEach((value, key) => {
      currentQueryParams[key] = value;
    });

    return currentQueryParams;
  };

  const updateQueryParams = (value, queryKey) => {
    const currentQueryParams = getCurrentQueryParams();

    if (searchParams.has(queryKey)) {
      currentQueryParams[queryKey] = currentQueryParams[queryKey].concat(
        ",",
        value
      );
    } else {
      currentQueryParams[queryKey] = value;
    }

    setSearchParams(currentQueryParams);
  };

  const removeSearchQueries = (value, queryKey) => {
    if (searchParams.get(queryKey).split(",").length > 1) {
      const searchValueUpdated = searchParams
        .get(queryKey)
        .split(",")
        .filter((item) => item !== value)
        .join(",");

      const currentQueryParams = getCurrentQueryParams();

      currentQueryParams[queryKey] = searchValueUpdated;
      setSearchParams(currentQueryParams);
    } else {
      searchParams.delete(queryKey);
      const currentQueryParams = getCurrentQueryParams();
      setSearchParams(currentQueryParams);
    }
  };

  const getQueriesManager = (queryKey) => (e) => {
    if (e.target.checked) {
      updateQueryParams(e.target.value, queryKey);
    } else {
      removeSearchQueries(e.target.value, queryKey);
    }
    setShouldReset(false);
  };

  return { getQueriesManager };
};

export default useAdvanceSearch;
