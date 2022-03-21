import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const SearchInput = styled(TextField)({
  color: "black",
  "& .MuiFilledInput-root": {
    marginBottom: "0px",
  },
});

export default SearchInput;
