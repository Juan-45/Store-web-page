import { AccordionDetails, FormGroup } from "@mui/material";
import {
  Container,
  CustomAccordion,
  CustomAccordionSummary,
} from "./advanceSearchSection/CustomComponents";
import CheckboxItem from "./advanceSearchSection/CheckboxItem";

const AdvanceSearchSection = ({
  title,
  searchSettings,
  manageQueries,
  shouldReset,
}) => (
  <Container>
    <CustomAccordion>
      <CustomAccordionSummary>{title}</CustomAccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {searchSettings.map((item) => (
            <CheckboxItem
              label={item.label}
              value={item.value}
              manageQueries={manageQueries}
              shouldReset={shouldReset}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </CustomAccordion>
  </Container>
);

export default AdvanceSearchSection;
