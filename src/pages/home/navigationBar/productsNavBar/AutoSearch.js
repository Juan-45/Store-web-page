import CustomPopper from "./autoSearch/CustomPopper";
import { Autocomplete } from "@mui/material/";
import SearchInput from "./autoSearch/SearchInput";
import { Grid } from "@mui/material/";
import { memo } from "react";

const AutoSearch = ({ autocompleteData, sx }) => {
  return (
    <Grid
      item
      sx={{
        flexGrow: "0",
        flexBasis: "420px",
        ...sx,
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

export default memo(AutoSearch);
