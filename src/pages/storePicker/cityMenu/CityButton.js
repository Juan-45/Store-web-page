import { styled, Button } from "@mui/material";

const Root = styled(Button)({
  width: "140px",
});

const CityButton = ({ children, ...props }) => {
  return (
    <Root variant="outlined" size="small" {...props}>
      {children}
    </Root>
  );
};

export default CityButton;
