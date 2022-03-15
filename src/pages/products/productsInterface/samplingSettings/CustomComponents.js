import {
  Grid,
  MenuItem,
  Menu,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import theme from "theme";

const Container = ({ children }) => (
  <Grid
    container
    justifyContent="space-between"
    alignItems="center"
    sx={{ background: "white", padding: "15px 5px" }}
  >
    {children}
  </Grid>
);

const SettingButton = ({ children, text, ...props }) => (
  <Grid container wrap="nowrap" alignItems="center">
    <Typography variant="body2">Ordenado por:</Typography>
    <Button
      sx={{
        borderRadius: "0px",
        boxShadow: theme.shadows[4],
        marginLeft: "10px",
        width: "135px",
      }}
      size="small"
      {...props}
    >
      {text}
    </Button>
    {children}
  </Grid>
);

const CustomIconButton = ({ upwardOrder, handleUpwardOrder }) => (
  <IconButton disableRipple onClick={handleUpwardOrder}>
    {upwardOrder ? (
      <ArrowDropDownOutlinedIcon sx={{ fontSize: "2rem" }} />
    ) : (
      <ArrowDropUpOutlinedIcon sx={{ fontSize: "2rem" }} />
    )}
  </IconButton>
);

const CustomMenu = ({ children, ...props }) => (
  <Menu
    elevation={4}
    keepMounted
    sx={{
      "& .MuiPaper-root": {
        maxWidth: "unset",
        color: theme.palette.text.secondary,
        borderRadius: "0px",
        width: "135px",
      },
    }}
    {...props}
  >
    {children}
  </Menu>
);

const CustomMenuItem = ({ children, ...props }) => (
  <MenuItem {...props}>
    <Typography variant="body2">{children}</Typography>
  </MenuItem>
);

export {
  Container,
  SettingButton,
  CustomMenu,
  CustomMenuItem,
  CustomIconButton,
};
