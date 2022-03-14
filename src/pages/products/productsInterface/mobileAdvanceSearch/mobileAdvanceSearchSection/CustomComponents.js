import { Divider, ListItem, Typography } from "@mui/material";
import CheckboxItem from "../../CheckboxItem";

const Title = ({ children }) => (
  <>
    <Divider />
    <Typography sx={{ padding: "8px 0px 8px 16px" }}>{children}</Typography>
    <Divider />
  </>
);

const CheckboxListItem = ({ ...props }) => (
  <ListItem sx={{ padding: "0px" }}>
    <CheckboxItem sx={{ width: "100%" }} {...props} />
  </ListItem>
);

export { Title, CheckboxListItem };
