import FadeBackground from "./FadeBackground";
import HeaderContainer from "./header/HeaderContainer";
import TopSection from "./header/TopSection";
import BottomSection from "./header/BottomSection";
import ParallaxBackground from "./ParallaxBackground";
import useCheckLandScape from "hooks/useCheckLandScape";

const Header = () => {
  const { isOnLandScape } = useCheckLandScape();

  return (
    <>
      <ParallaxBackground />
      <HeaderContainer>
        <TopSection isOnLandScape={isOnLandScape}>
          Lorem ipsum dolor sit amet, consectetur.
        </TopSection>
        <BottomSection isOnLandScape={isOnLandScape}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
          dapibus mauris eget.
        </BottomSection>
        <FadeBackground
          isOnLandScape={isOnLandScape}
          position={
            isOnLandScape
              ? {
                  top: "75vh",
                }
              : {
                  top: "80vh",
                }
          }
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
