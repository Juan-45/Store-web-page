import Container from "./productCard/Container";
import ProductImage from "./productCard/ProductImage";
import ProductDescription from "./productCard/ProductDescription";
import onlineStore from "images/online-store.png";

const ProductCard = ({ productData }) => {
  const { title, price, minimum } = productData;
  return (
    <Container>
      <ProductImage src={onlineStore} />
      <ProductDescription title={title} price={price} minimum={minimum} />
    </Container>
  );
};

export default ProductCard;
