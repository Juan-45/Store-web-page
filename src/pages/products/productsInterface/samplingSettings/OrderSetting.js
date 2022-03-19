import {
  SettingButton,
  CustomMenu,
  CustomMenuItem,
  CustomIconButton,
} from "./CustomComponents";
import { Box } from "@mui/material";
import useMenu from "hooks/useMenu";
import useOrderSetting from "./orderSetting/useOrderSetting";

const OrderSetting = ({ shouldReset, setShouldReset }) => {
  const {
    setElementPosition,
    elementPosition,
    handleOpenMenu,
    handleCloseMenu,
  } = useMenu();
  const { orderOption, upwardOrder, getOrderOptionHandler, handleUpwardOrder } =
    useOrderSetting(setElementPosition, shouldReset, setShouldReset);

  return (
    <Box>
      <SettingButton onClick={handleOpenMenu} text={orderOption}>
        <CustomIconButton
          upwardOrder={upwardOrder}
          handleUpwardOrder={handleUpwardOrder}
        />
      </SettingButton>
      <CustomMenu
        anchorEl={elementPosition}
        open={Boolean(elementPosition)}
        onClose={handleCloseMenu}
      >
        {[
          { label: "Nombre", query: "nombre" },
          { label: "Precio", query: "precio" },
        ].map((item) => (
          <CustomMenuItem
            key={item.label}
            onClick={getOrderOptionHandler(item.query)}
          >
            {item.label}
          </CustomMenuItem>
        ))}
      </CustomMenu>
    </Box>
  );
};

export default OrderSetting;
