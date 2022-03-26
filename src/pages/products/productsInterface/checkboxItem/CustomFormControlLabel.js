import { FormControlLabel, Checkbox } from "@mui/material";
import theme from "theme";

const CustomFormControlLabel = ({ sx, ...props }) => (
  <FormControlLabel
    control={<Checkbox />}
    componentsProps={{
      typography: {
        variant: "body2",
      },
    }}
    sx={{
      margin: "0px",
      paddingRight: "8px",
      "&:hover": {
        background: theme.palette.background.light,
      },
      ...sx,
    }}
    {...props}
  />
);

export default CustomFormControlLabel;
