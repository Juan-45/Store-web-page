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
        <TopSection container justifyContent="center" alignContent="center">
          <Typography variant="h2" align="center">
            {"Lorem ipsum dolor sit amet, consectetur." + isOnLandScape
              ? "LANDSCAPE ACTIVATED"
              : "LANDSCAPE ES FALSO"}
          </Typography>
        </TopSection>
        <BottomSection container justifyContent="center" alignContent="center">
          <Typography paragraph={true} align="center" sx={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum dapibus mauris eget.
          </Typography>
        </BottomSection>
        <FadeBackground
          position={{
            top: "80vh", //75vh solo en landscape
          }}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
