import { Typography } from "@mui/material";
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
      <HeaderContainer
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <TopSection
          container
          justifyContent="center"
          alignContent="center"
          isOnLandScape={isOnLandScape}
        >
          <Typography variant="h2" align="center">
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </TopSection>
        <BottomSection
          container
          justifyContent="center"
          alignContent="center"
          isOnLandScape={isOnLandScape}
        >
          <Typography paragraph={true} align="center" sx={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum dapibus mauris eget.
          </Typography>
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
