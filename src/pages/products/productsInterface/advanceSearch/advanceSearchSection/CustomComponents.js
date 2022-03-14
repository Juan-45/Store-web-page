import {
  Accordion,
  AccordionSummary,
  FormControlLabel,
  Checkbox,
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
  <Accordion sx={{ color: "black" }} square={true} {...props}>
    {children}
  </Accordion>
);

const CustomAccordionSummary = ({ children }) => (
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography variant="body1">{children}</Typography>
  </AccordionSummary>
);

const CustomFormControlLabel = ({ ...props }) => (
  <FormControlLabel
    control={<Checkbox />}
    componentsProps={{
      typography: {
        variant: "body2",
      },
    }}
    sx={{
      "&:hover": {
        background: theme.palette.secondary.light,
      },
    }}
    {...props}
  />
);

export {
  Container,
  CustomAccordion,
  CustomAccordionSummary,
  CustomFormControlLabel,
};
