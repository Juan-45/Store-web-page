import PageContainer from "components/PageContainer";
import GenericTitle from "components/GenericTitle";
import ProductsInterface from "./products/ProductsInterface";

const Products = () => {
  return (
    <PageContainer
      sx={{ paddingTop: { xs: "150px", sm: "230px" } }}
      xs={11}
      md={10}
      lg={9}
      xl={8}
    >
      <GenericTitle>Busca nuestros productos</GenericTitle>
      <ProductsInterface />
    </PageContainer>
  );
};

export default Products;
