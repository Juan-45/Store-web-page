import {
  styled,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemButton,
} from "@mui/material";
import theme from "theme";

const CustomMenuItem = styled(MenuItem)({
  padding: "0px !important",
});

const CustomAccordion = styled(Accordion)({
  width: "100%",
  boxShadow: "unset",
});

const CustomAccordionSummary = styled(AccordionSummary)({
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary.dark,
  },
});

const CustomAccordionDetails = styled(AccordionDetails)({
  color: theme.palette.text.secondary,
});

const CustomListItemButton = styled(ListItemButton)({
  paddingLeft: "4px",
  background: theme.palette.secondary.light,
  "&:hover": {
    background: theme.palette.secondary.hover,
  },
});

export {
  CustomMenuItem,
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomListItemButton,
};
