import Container from "./products/Container";
import GenericTitle from "components/GenericTitle";
import ProductsInterface from "./products/ProductsInterface";

const Products = () => {
  return (
    <Container>
      <GenericTitle>Busca nuestros productos</GenericTitle>
      <ProductsInterface />
    </Container>
  );
};

export default Products;
