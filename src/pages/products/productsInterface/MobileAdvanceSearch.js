import {
  FloatantButton,
  CustomDrawer,
  DrawerHeader,
} from "./mobileAdvanceSearch/CustomComponents";
import MobileAdvanceSearchSection from "./mobileAdvanceSearch/MobileAdvanceSearchSection";
import useAdvanceSearch from "./useAdvanceSearch";
import useDrawer from "./mobileAdvanceSearch/mobileAdvanceSearchSection/useDrawer";

const MobileAdvanceSearch = ({
  shouldReset,
  setShouldReset,
  searchSettings,
}) => {
  const { getQueriesManager } = useAdvanceSearch(setShouldReset);
  const { openDrawer, shouldOpen, handleFlotantButton, handleDrawerClose } =
    useDrawer();

  const { dietSearchSettings, weightSearchSettings } = searchSettings;

  return (
    <>
      {openDrawer ? null : (
        <FloatantButton handleFlotantButton={handleFlotantButton} />
      )}
      <CustomDrawer open={shouldOpen}>
        <DrawerHeader handleDrawerClose={handleDrawerClose} />
        <MobileAdvanceSearchSection
          title="Dietas"
          queryKey="dieta"
          searchSettings={dietSearchSettings}
          manageQueries={getQueriesManager("dieta")}
          shouldReset={shouldReset}
        />
        <MobileAdvanceSearchSection
          title="Peso"
          queryKey="peso"
          searchSettings={weightSearchSettings}
          manageQueries={getQueriesManager("peso")}
          shouldReset={shouldReset}
        />
      </CustomDrawer>
    </>
  );
};

export default MobileAdvanceSearch;
