import Container from "./productCard/Container";
import ProductImage from "./productCard/ProductImage";
import ProductDescription from "./productCard/ProductDescription";

const ProductCard = ({ productData }) => {
  const { title, price, minimum } = productData;
  return (
    <Container>
      <ProductImage src={"https://via.placeholder.com/300x300"} />
      <ProductDescription title={title} price={price} minimum={minimum} />
    </Container>
  );
};

export default ProductCard;
