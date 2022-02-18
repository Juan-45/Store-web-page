import {
  FilledInput,
  IconButton,
  InputAdornment,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useEffect } from "react";

const PasswordInput = ({
  onChange,
  shouldReset,
  label,
  required,
  helperText,
  error,
  id,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (shouldReset) {
      setValue("");
    }
  }, [shouldReset]);

  return (
    <FormControl
      variant="filled"
      sx={{ minWidth: "100%", marginBottom: "20px" }}
    >
      <InputLabel
        htmlFor={`filled-adornment-password- ${id}`}
        error={error}
        sx={{ top: "-3px" }}
      >
        {required ? `${label} *` : label}
      </InputLabel>
      <FilledInput
        id={`filled-adornment-password- ${id}`}
        value={value}
        type={showPassword ? "text" : "password"}
        error={error}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        onChange={handleChange}
        sx={{
          "& > input": { paddingBottom: "4px" },
        }}
        {...props}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
