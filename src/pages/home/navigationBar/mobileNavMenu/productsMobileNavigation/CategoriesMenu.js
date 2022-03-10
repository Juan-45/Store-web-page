import { Typography, List, ListItemText, ListItemIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "components/Menu";
import {
  CustomMenuItem,
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomListItemButton,
} from "./categoriesMenu/CustomComponents";

const CategoriesMenu = ({
  isTouchScreen,
  categories,
  subCategories,
  setElementPosition,
  elementPosition,
  handleCloseMenu,
}) => {
  const getItemButtonHandler =
    ({ currentCategory, item }) =>
    () => {
      setElementPosition(false);
      console.log("Categoría:", currentCategory);
      console.log("Item:", item);
    };

  return (
    <Menu
      elevation={16}
      variant="blue"
      anchorEl={elementPosition}
      keepMounted
      open={Boolean(elementPosition)}
      onClose={handleCloseMenu}
      isTouchScreen={isTouchScreen}
    >
      {categories.map((category) => (
        <CustomMenuItem key={category.name}>
          <CustomAccordion square={true}>
            <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{category.label}</Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <List orientation="vertical">
                {subCategories[category.name].map((subCategories) => (
                  <CustomListItemButton
                    key={subCategories.label}
                    onClick={getItemButtonHandler({
                      currentCategory: category.name,
                      item: subCategories.label,
                    })}
                  >
                    <ListItemIcon>
                      <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary={subCategories.label} />
                  </CustomListItemButton>
                ))}
              </List>
            </CustomAccordionDetails>
          </CustomAccordion>
        </CustomMenuItem>
      ))}
    </Menu>
  );
};

export default CategoriesMenu;
