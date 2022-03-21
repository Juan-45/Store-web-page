import { ButtonGroup } from "@mui/material";
import { ButtonGroupContainer, CustomButton } from "./CustomComponents";
import { forwardRef, memo } from "react";

const ButtonsBar = (
  { categories, handleOpenMenu, getCategoryButtonHanlder },
  ref
) => (
  <ButtonGroupContainer>
    <ButtonGroup ref={ref}>
      {categories.map((category) => (
        <CustomButton
          name={category.name}
          key={category.name}
          onMouseEnter={handleOpenMenu}
          onClick={getCategoryButtonHanlder(category.path)}
        >
          {category.label}
        </CustomButton>
      ))}
    </ButtonGroup>
  </ButtonGroupContainer>
);

export default memo(forwardRef(ButtonsBar));
