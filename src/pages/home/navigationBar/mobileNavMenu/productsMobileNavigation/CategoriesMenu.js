import { Typography } from "@mui/material";
import CustomMenu from "components/CustomMenu";
import {
  CustomMenuItem,
  CustomAccordion,
  CustomAccordionSummary,
  CustomAccordionDetails,
  CustomList,
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
    <CustomMenu
      anchorEl={elementPosition}
      keepMounted
      open={Boolean(elementPosition)}
      onClose={handleCloseMenu}
      isTouchScreen={isTouchScreen}
    >
      {categories.map((category) => (
        <CustomMenuItem key={category.name}>
          <CustomAccordion>
            <CustomAccordionSummary>
              <Typography>{category.label}</Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <CustomList>
                {subCategories[category.name].map((subCategories) => (
                  <CustomListItemButton
                    key={subCategories.label}
                    onClick={getItemButtonHandler({
                      currentCategory: category.name,
                      item: subCategories.label,
                    })}
                    primary={subCategories.label}
                  />
                ))}
              </CustomList>
            </CustomAccordionDetails>
          </CustomAccordion>
        </CustomMenuItem>
      ))}
    </CustomMenu>
  );
};

export default CategoriesMenu;
