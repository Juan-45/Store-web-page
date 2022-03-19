import { Container } from "./samplingSettings/CustomComponents";
import OrderSetting from "./samplingSettings/OrderSetting";

const SamplingSettings = ({ shouldReset, setShouldReset }) => {
  return (
    <Container>
      <OrderSetting shouldReset={shouldReset} setShouldReset={setShouldReset} />
    </Container>
  );
};

export default SamplingSettings;
