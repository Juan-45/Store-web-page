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
  Typography,
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
    <Typography variant="body2">{children}</Typography>
  </AccordionSummary>
);

const CustomAccordionDetails = styled(AccordionDetails)({
  color: theme.palette.text.secondary,
  padding: "0px",
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
      <ArrowForwardIosIcon fontSize="1rem" />
    </ListItemIcon>
    <ListItemText
      primary={primary}
      primaryTypographyProps={{ variant: "body2" }}
    />
  </ListItemButton>
);

const CustomList = ({ children, ...props }) => (
  <List orientation="vertical" sx={{ padding: "0px" }} {...props}>
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
