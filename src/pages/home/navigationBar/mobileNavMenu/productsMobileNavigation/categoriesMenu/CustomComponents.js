import {
  styled,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "theme";

const CustomMenuItem = styled(MenuItem)({
  padding: "0px !important",
});

const CustomAccordion = ({ children, ...props }) => (
  <Accordion
    sx={{ width: "100%", boxShadow: "unset" }}
    square={true}
    {...props}
  >
    {children}
  </Accordion>
);

const CustomAccordionSummary = ({ children, ...props }) => (
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    sx={{
      background: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.dark,
      },
    }}
    {...props}
  >
    {children}
  </AccordionSummary>
);

const CustomAccordionDetails = styled(AccordionDetails)({
  color: theme.palette.text.secondary,
});

const CustomListItemButton = ({ primary, ...props }) => (
  <ListItemButton
    sx={{
      paddingLeft: "4px",
      background: theme.palette.secondary.light,
      "&:hover": {
        background: theme.palette.secondary.hover,
      },
    }}
    {...props}
  >
    <ListItemIcon>
      <ArrowForwardIosIcon />
    </ListItemIcon>
    <ListItemText primary={primary} />
  </ListItemButton>
);

const CustomList = ({ children, ...props }) => (
  <List orientation="vertical" {...props}>
    {children}
  </List>
);

export {
  CustomMenuItem,
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomList,
  CustomListItemButton,
};
