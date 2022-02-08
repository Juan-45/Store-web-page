import { TextField, styled } from "@mui/material";
import { useState, useMemo, useEffect } from "react";

const Input = ({ onChange, shouldReset, ...props }) => {
  const Root = useMemo(() => styled(TextField)({ marginBottom: "20px" }), []);
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

  return <Root value={value} onChange={handleChange} {...props} />;
};

export default Input;
