import { Popper } from "@mui/material";
import "./customPopper/CustomPopper.css";

const CustomPopper = ({ children, ...props }) => (
  <Popper {...props} id="customPopper">
    {children}
  </Popper>
);

export default CustomPopper;
