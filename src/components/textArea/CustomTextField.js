import { TextField } from "@mui/material";

const CustomTextField = ({ ...props }) => (
  <TextField
    multiline
    minRows={6}
    sx={{
      "& > .MuiFilledInput-root :first-child": {
        paddingTop: "0px",
      },
    }}
    {...props}
  />
);

export default CustomTextField;
