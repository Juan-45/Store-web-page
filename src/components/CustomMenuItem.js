import { MenuItem, ListItemIcon, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomMenuItem = ({ onClickHandler, label }) => (
  <MenuItem onClick={onClickHandler}>
    <ListItemIcon>
      <ArrowForwardIosIcon />
    </ListItemIcon>
    <Typography textAlign="center" variant="body2">
      {label}
    </Typography>
  </MenuItem>
);

export default CustomMenuItem;
