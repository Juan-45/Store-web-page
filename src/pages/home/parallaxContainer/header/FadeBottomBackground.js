import ObservedContainer from "./fadeBottomContainer/ObservedContainer";
import FadeOnScrolling from "./fadeBottomContainer/FadeOnScrolling";
import useFade from "hooks/useFade";

const FadeBottomBackground = () => {
  const { opacity, ref } = useFade();
  return (
    <ObservedContainer ref={ref}>
      <FadeOnScrolling currentOpacityValue={opacity} />
    </ObservedContainer>
  );
};

export default FadeBottomBackground;
