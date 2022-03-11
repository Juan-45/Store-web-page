const ProductImage = ({ src }) => (
  <img
    src={src}
    alt="product"
    style={{
      maxHeight: "300px",
      maxWidth: "300px",
    }}
  />
);

export default ProductImage;
