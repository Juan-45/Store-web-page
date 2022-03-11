import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

const Input = ({ onChange, shouldReset, ...props }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    if (shouldReset) {
      setValue("");
    }
  }, [shouldReset]);

  return <TextField value={value} onChange={handleChange} {...props} />;
};

export default Input;
