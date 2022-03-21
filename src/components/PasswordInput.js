import { FormHelperText } from "@mui/material";

import { useState, useEffect } from "react";
import {
  CustomFormControl,
  CustomFilledInput,
  CustomInputLabel,
} from "components/passwordInput/CustomComponents";

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
    <CustomFormControl>
      <CustomInputLabel
        htmlFor={`filled-adornment-password- ${id}`}
        error={error}
      >
        {required ? `${label} *` : label}
      </CustomInputLabel>
      <CustomFilledInput
        id={`filled-adornment-password- ${id}`}
        value={value}
        type={showPassword ? "text" : "password"}
        error={error}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        onChange={handleChange}
        {...props}
      />
      {error ? (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      ) : null}
    </CustomFormControl>
  );
};

export default PasswordInput;
