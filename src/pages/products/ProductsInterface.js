import { useParams, useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import GenericContainer from "components/GenericContainer";
import ProductCard from "./productsInterface/ProductCard";

const ProductsInterface = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  console.log("useParams:", params);
  console.log("searchParams:", searchParams);

  return (
    <Grid container columns="16" columnGap="20px" wrap="nowrap">
      <GenericContainer
        container
        item
        direction="column"
        sx={{ display: { xs: "none", sm: "flex" }, height: "700px" }}
        xs={4}
        sm={4}
      >
        Criterios avanzados de bsuqeuda
      </GenericContainer>

      <GenericContainer
        container
        item
        direction="column"
        xs={16}
        sm={12}
        wrap="nowrap"
      >
        <Grid container sx={{ height: "40px", background: "white" }}>
          Criterios de Distribucion
        </Grid>

        <Grid
          container
          //columnGap="20px"
          // rowGap="20px"
          columns="12"
          //  sx={{ boxSizing: "border-box", padding: "20px" }}
          //wrap="nowrap"
        >
          {/*xs= 2 cajas, sm= 2 cajas, md= 3 cajas, lg= 4 cajas */}

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Grid>
      </GenericContainer>
    </Grid>
  );
};

export default ProductsInterface;
