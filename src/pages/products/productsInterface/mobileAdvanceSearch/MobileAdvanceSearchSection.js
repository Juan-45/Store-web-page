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
        />
      ))}
    </List>
  </>
);

export default MobileAdvanceSearchSection;
