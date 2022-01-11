import { Typography } from "@mui/material";
import FadeBackground from "./FadeBackground";
import HeaderContainer from "./header/HeaderContainer";
import TopSection from "./header/TopSection";
import BottomSection from "./header/BottomSection";
import ParallaxBackground from "./ParallaxBackground";

const Header = () => {
  return (
    <>
      <ParallaxBackground />
      <HeaderContainer
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <TopSection container justifyContent="center" alignContent="center">
          <Typography variant="h1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum dapibus mauris eget maximus.
          </Typography>
        </TopSection>
        <BottomSection container justifyContent="center" alignContent="center">
          <Typography paragraph={true} align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum dapibus mauris eget maximus. Suspendisse potenti.
          </Typography>
        </BottomSection>
        <FadeBackground position={{ top: "80vh" }} />
      </HeaderContainer>
    </>
  );
};

export default Header;