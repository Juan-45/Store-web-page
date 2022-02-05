import { TextField, styled } from "@mui/material";
import { useState, useMemo, useEffect } from "react";

const TextArea = ({ onChange, shouldReset, ...props }) => {
  const Root = useMemo(
    () =>
      styled(TextField)({
        "& > .MuiFilledInput-root :first-child": {
          paddingTop: "0px",
        },
      }),
    []
  );
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

  return (
    <Root
      value={value}
      onChange={handleChange}
      multiline
      minRows={6}
      {...props}
    />
  );
};

export default TextArea;
