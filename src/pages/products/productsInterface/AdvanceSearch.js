import AdvanceSearchSection from "./advanceSearch/AdvanceSearchSection";
import Container from "./advanceSearch/Container";
import useAdvanceSearch from "./advanceSearch/useAdvanceSearch";

const AdvanceSearch = ({ shouldReset, setShouldReset }) => {
  const { getQueriesManager } = useAdvanceSearch(setShouldReset);

  const dietSearchSettings = [
    {
      label: "Sin TACC",
      value: "sinTACC",
    },
    {
      label: "Vegano",
      value: "vegano",
    },
    {
      label: "Sin Sal agregada",
      value: "sinSalAgregada",
    },
    {
      label: "Sin Lactosa",
      value: "sinLactosa",
    },
  ];

  const weightSearchSettings = [
    {
      label: "< de 100 g",
      value: "<100g",
    },
    {
      label: "E/ 150 y 500 g",
      value: "e150y500g",
    },
    {
      label: "1 Kg",
      value: "1Kg",
    },
  ];

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
