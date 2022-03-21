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
  categoriesTree,
  elementPosition,
  handleCloseMenu,
  getSubCategoryButtonHandler,
}) => {
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
            <CustomAccordionSummary>{category.label}</CustomAccordionSummary>
            <CustomAccordionDetails>
              <CustomList>
                {categoriesTree[category.name].map((subCategory) => (
                  <CustomListItemButton
                    key={subCategory.label}
                    onClick={getSubCategoryButtonHandler({
                      categoryPath: category.path,
                      subCategoryQuery: subCategory.query,
                    })}
                    primary={subCategory.label}
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
