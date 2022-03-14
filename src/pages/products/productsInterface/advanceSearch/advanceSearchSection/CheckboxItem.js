import { CustomFormControlLabel } from "./CustomComponents";
import { useState, useEffect } from "react";

const CheckboxItem = ({ shouldReset, manageQueries, ...props }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    manageQueries(e);
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    if (shouldReset) {
      setChecked(false);
    }
  }, [shouldReset]);

  return (
    <CustomFormControlLabel
      checked={checked}
      onChange={handleCheckbox}
      {...props}
    />
  );
};

export default CheckboxItem;
