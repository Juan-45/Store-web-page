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
        width: { xs: "70%", md: "75%" },
        flexGrow: "1",
      }}
    >
      <Autocomplete
        options={autocompleteData}
        autoComplete
        PopperComponent={CustomPopper}
        renderInput={(params) => (
          <SearchInput placeholder="Buscar productos" {...params} />
        )}
      />
    </Grid>
  );
};

export default AutoSearch;
