import CustomFormControlLabel from "./checkboxItem/CustomFormControlLabel";
import useCheckBoxItem from "./checkboxItem/useCheckBoxItem";

const CheckboxItem = ({
  shouldReset,
  manageQueries,
  value,
  queryKey,
  ...props
}) => {
  const { checked, handleCheckbox } = useCheckBoxItem({
    shouldReset,
    manageQueries,
    value,
    queryKey,
  });

  return (
    <CustomFormControlLabel
      checked={checked}
      onChange={handleCheckbox}
      value={value}
      {...props}
    />
  );
};

export default CheckboxItem;
