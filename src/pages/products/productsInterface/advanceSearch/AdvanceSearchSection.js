import { FormGroup } from "@mui/material";
import {
  Container,
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
} from "./advanceSearchSection/CustomComponents";
import CheckboxItem from "../CheckboxItem";

const AdvanceSearchSection = ({
  title,
  searchSettings,
  manageQueries,
  shouldReset,
  queryKey,
}) => (
  <Container>
    <CustomAccordion>
      <CustomAccordionSummary>{title}</CustomAccordionSummary>
      <CustomAccordionDetails>
        <FormGroup>
          {searchSettings.map((item) => (
            <CheckboxItem
              label={item.label}
              value={item.value}
              manageQueries={manageQueries}
              shouldReset={shouldReset}
              queryKey={queryKey}
              key={item.value}
            />
          ))}
        </FormGroup>
      </CustomAccordionDetails>
    </CustomAccordion>
  </Container>
);

export default AdvanceSearchSection;
