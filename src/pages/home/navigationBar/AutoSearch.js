import CustomPopper from "./autoSearch/CustomPopper";
import { Autocomplete } from "@mui/material/";
import SearchInput from "./autoSearch/SearchInput";
import { Grid } from "@mui/material/";

const AutoSearch = ({ autocompleteData }) => {
  return (
    <Grid
      item
      sx={{
        paddingTop: { xs: "13px", md: "0px" },
        width: { xs: "initial", md: "75%" },
        minWidth: { xs: "70%", md: "unset" },
        flexGrow: "1",
      }}
    >
      <Autocomplete
        fullWidth
        size="small"
        options={autocompleteData}
        autoComplete
        PopperComponent={CustomPopper}
        renderInput={(params) => (
          <SearchInput
            placeholder="Buscar productos"
            variant="filled"
            {...params}
          />
        )}
      />
    </Grid>
  );
};

export default AutoSearch;
