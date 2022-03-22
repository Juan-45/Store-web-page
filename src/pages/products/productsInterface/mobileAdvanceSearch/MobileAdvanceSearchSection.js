import { List } from "@mui/material";
import {
  Title,
  CheckboxListItem,
} from "./mobileAdvanceSearchSection/CustomComponents";

const MobileAdvanceSearchSection = ({
  title,
  searchSettings,
  manageQueries,
  shouldReset,
  queryKey,
}) => (
  <>
    <Title>{title}</Title>
    <List>
      {searchSettings.map((item) => (
        <CheckboxListItem
          label={item.label}
          value={item.value}
          manageQueries={manageQueries}
          shouldReset={shouldReset}
          queryKey={queryKey}
        />
      ))}
    </List>
  </>
);

export default MobileAdvanceSearchSection;
