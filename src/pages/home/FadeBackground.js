import ObservedContainer from "./fadeBackground/ObservedContainer";
import FadeOnScrolling from "./fadeBackground/FadeOnScrolling";
import useFade from "hooks/useFade";

const FadeBackground = ({ position, isOnLandScape }) => {
  const { opacity, ref } = useFade();
  return (
    <ObservedContainer ref={ref}>
      <FadeOnScrolling
        currentOpacityValue={opacity}
        position={position}
        isOnLandScape={isOnLandScape}
      />
    </ObservedContainer>
  );
};

export default FadeBackground;
