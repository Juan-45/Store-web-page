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
        manageQueries={getQueriesManager("diet")}
        shouldReset={shouldReset}
      />
      <AdvanceSearchSection
        title={"Peso"}
        searchSettings={weightSearchSettings}
        manageQueries={getQueriesManager("weight")}
        shouldReset={shouldReset}
      />
    </Container>
  );
};

export default AdvanceSearch;
