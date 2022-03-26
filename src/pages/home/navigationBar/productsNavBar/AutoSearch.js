import CustomPopper from "./autoSearch/CustomPopper";
import { Autocomplete } from "@mui/material/";
import SearchInput from "./autoSearch/SearchInput";
import { Grid } from "@mui/material/";
import { memo } from "react";

const AutoSearch = ({ sx }) => {
  const products = [
    { label: "Mermelada de Naranja X 460 g" },
    { label: "Mermelada de Frutilla X 460 g" },
    { label: "Mermelada de Durazno X 460 g" },
    { label: "Yerba Organica x 500 g" },
    { label: "Yerba Mate Libre de Gluten x 500 gr." },
    { label: "Arroz Integral Yamani x 1,25 kg" },
    { label: "Copos Integrales (Trigo, Maíz, Avena, Arroz) x 3 kg" },
  ];

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
        options={products}
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
