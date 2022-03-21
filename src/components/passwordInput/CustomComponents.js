import {
  FilledInput,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  styled,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomFormControl = ({ children, ...props }) => (
  <FormControl
    variant="filled"
    sx={{ minWidth: "100%", marginBottom: "20px" }}
    {...props}
  >
    {children}
  </FormControl>
);

const CustomFilledInput = ({
  showPassword,
  handleClickShowPassword,
  ...props
}) => (
  <FilledInput
    endAdornment={
      <InputAdornment position="end">
        <IconButton onClick={handleClickShowPassword} edge="end">
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    sx={{
      "& > input": { paddingBottom: "4px" },
    }}
    {...props}
  />
);

const CustomInputLabel = styled(InputLabel)({
  top: "-3px",
});

export { CustomFormControl, CustomFilledInput, CustomInputLabel };
