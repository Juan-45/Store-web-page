import {
  Container,
  InnerContainer,
  ProductsContainer,
} from "./productsInterface/CustomComponents";
import ProductCard from "./productsInterface/ProductCard";
import AdvanceSearch from "./productsInterface/AdvanceSearch";
import MobileAdvanceSearch from "./productsInterface/MobileAdvanceSearch";
import SamplingSettings from "./productsInterface/SamplingSettings";
import useResetAdvanceSearch from "./productsInterface/useResetAdvanceSearch";
import useMockedData from "./productsInterface/useMockedData";

const ProductsInterface = () => {
  const { shouldReset, setShouldReset } = useResetAdvanceSearch();

  const { mockedData } = useMockedData();

  const searchSettings = {
    dietSearchSettings: [
      {
        label: "Sin TACC",
        value: "sinTACC",
      },
      {
        label: "Vegano",
        value: "vegano",
      },
      {
        label: "Sin Sal agregada",
        value: "sinSalAgregada",
      },
      {
        label: "Sin Lactosa",
        value: "sinLactosa",
      },
    ],
    weightSearchSettings: [
      {
        label: "<= de 100 g",
        value: "<=100g",
      },
      {
        label: "E/ 150 y 500 g",
        value: "e150y500g",
      },
      {
        label: "1 Kg",
        value: "1kg",
      },
    ],
  };

  return (
    <Container>
      <AdvanceSearch
        shouldReset={shouldReset}
        setShouldReset={setShouldReset}
        searchSettings={searchSettings}
      />
      <MobileAdvanceSearch
        shouldReset={shouldReset}
        setShouldReset={setShouldReset}
        searchSettings={searchSettings}
      />
      <InnerContainer>
        <SamplingSettings
          shouldReset={shouldReset}
          setShouldReset={setShouldReset}
        />
        <ProductsContainer>
          {mockedData.map((productData) => (
            <ProductCard productData={productData} key={productData.title} />
          ))}
        </ProductsContainer>
      </InnerContainer>
    </Container>
  );
};

export default ProductsInterface;
