import { MenuItem, Menu } from "@mui/material";
import { MenuItemText } from "./CustomComponents";
import { forwardRef, memo } from "react";

const DropDownMenu = (
  {
    elementPosition,
    shouldOpen,
    handleCloseMenu,
    categoriesTree,
    currentCategory,
    getSubCategoryButtonHanlder,
  },
  ref
) => (
  <Menu
    elevation={16}
    anchorEl={elementPosition}
    keepMounted
    open={shouldOpen}
    variant="navMenu"
    onMouseLeave={handleCloseMenu}
    MenuListProps={{
      ref,
    }}
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

export default memo(forwardRef(DropDownMenu));
