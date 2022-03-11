import { useState, useEffect } from "react";
import CustomTextField from "./textArea/CustomTextField";

const TextArea = ({ onChange, shouldReset, ...props }) => {
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

  return <CustomTextField value={value} onChange={handleChange} {...props} />;
};

export default TextArea;
