import AdvanceSearchSection from "./advanceSearch/AdvanceSearchSection";
import Container from "./advanceSearch/Container";
import useAdvanceSearch from "./useAdvanceSearch";

const AdvanceSearch = ({ shouldReset, setShouldReset, searchSettings }) => {
  const { getQueriesManager } = useAdvanceSearch(setShouldReset);

  const { dietSearchSettings, weightSearchSettings } = searchSettings;

  return (
    <Container>
      <AdvanceSearchSection
        title={"Dietas"}
        searchSettings={dietSearchSettings}
        manageQueries={getQueriesManager("dieta")}
        shouldReset={shouldReset}
        queryKey="dieta"
      />
      <AdvanceSearchSection
        title={"Peso"}
        searchSettings={weightSearchSettings}
        manageQueries={getQueriesManager("peso")}
        shouldReset={shouldReset}
        queryKey="peso"
      />
    </Container>
  );
};

export default AdvanceSearch;
