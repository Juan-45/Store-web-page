import ObservedContainer from "./fadeContainer/ObservedContainer";
import FadeOnScrolling from "./fadeContainer/FadeOnScrolling";
import useFade from "hooks/useFade";

const FadeBackground = ({ position }) => {
  const { opacity, ref } = useFade();
  return (
    <ObservedContainer ref={ref}>
      <FadeOnScrolling currentOpacityValue={opacity} position={position} />
    </ObservedContainer>
  );
};

export default FadeBackground;
