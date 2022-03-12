import { useParams, useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";

const ProductsInterface = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  console.log("useParams:", params);
  console.log("searchParams:", searchParams);

  return (
    <>
      <Typography gutterBottom>
        {`Categoría seleccionada: ${params["*"]}`}
      </Typography>
      <Typography>
        {`Sub-categoria seleccionada: ${searchParams[0].get("subCategoria")}`}
      </Typography>
    </>
  );
};

export default ProductsInterface;
