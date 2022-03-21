import {
  Container,
  CustomImage,
  ProducstDescription,
} from "./productCard/CustomComponents";

const ProductCard = ({ productData }) => {
  const { title, price, details, imageSrc } = productData;

  return (
    <Container>
      <CustomImage src={imageSrc} />
      <ProducstDescription title={title} price={price} details={details} />
    </Container>
  );
};

export default ProductCard;
