import FadeBackground from "../FadeBackground";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
import {
  Container,
  CarouselContainer,
  Title,
} from "./relevantProducts/CustomComponents";

const RelevantProducts = () => (
  <Container>
    <FadeBackground />
    <Title>Productos destacados</Title>
    <CarouselContainer>
      <Carousel>
        {[
          {
            title: "Producto N 1",
            price: "$ 254,00",
          },
          {
            title: "Producto N 2",
            price: "$ 678,70",
            minimum: "2",
          },
          {
            title: "Producto N 3",
            price: "$ 247,70",
          },
          {
            title: "Producto N 4",
            price: "$ 587,00",
            minimum: "2",
          },
          {
            title: "Producto N 5",
            price: "$ 200,00",
          },
          {
            title: "Producto N 6",
            price: "$ 278,00",
          },
          {
            title: "Producto N 7",
            price: "$ 890,00",
          },
          {
            title: "Producto N 8",
            price: "$ 1.115,40",
            minimum: "2",
          },
        ].map((item) => {
          return <ProductCard productData={item} key={item.title} />;
        })}
      </Carousel>
    </CarouselContainer>
  </Container>
);

export default RelevantProducts;
