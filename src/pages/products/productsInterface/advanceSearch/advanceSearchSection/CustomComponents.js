import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "theme";

const Container = styled(Box)({
  marginBottom: "20px",
});

const CustomAccordion = ({ children, ...props }) => (
  <Accordion
    sx={{ color: theme.palette.text.secondary }}
    square={true}
    {...props}
  >
    {children}
  </Accordion>
);

const CustomAccordionSummary = ({ children }) => (
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="body1">{children}</Typography>
  </AccordionSummary>
);

const CustomAccordionDetails = styled(AccordionDetails)({
  padding: "0px",
});

export {
  Container,
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
};
