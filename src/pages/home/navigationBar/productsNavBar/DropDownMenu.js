import { MenuItem, Menu } from "@mui/material";
import { MenuItemText } from "./CustomComponents";
import { memo } from "react";

const DropDownMenu = ({
  elementPosition,
  handleCloseMenu,
  categoriesTree,
  currentCategory,
  getSubCategoryButtonHanlder,
}) => (
  <Menu
    elevation={16}
    anchorEl={elementPosition}
    keepMounted
    open={Boolean(elementPosition)}
    variant="navMenu"
    onMouseLeave={handleCloseMenu}
  >
    {categoriesTree[`${currentCategory}`].map((subCategory) => (
      <MenuItem
        key={subCategory.label}
        onClick={getSubCategoryButtonHanlder({
          category: currentCategory,
          subCategory: subCategory.query,
        })}
      >
        <MenuItemText>{subCategory.label}</MenuItemText>
      </MenuItem>
    ))}
  </Menu>
);

export default memo(DropDownMenu);
