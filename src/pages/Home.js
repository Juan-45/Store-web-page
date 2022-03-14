import ParallaxContainer from "./home/ParallaxContainer";
import NavigationBar from "./home/NavigationBar";
import useDisplayOnScroll from "hooks/useDisplayOnScroll";
import Footer from "./home/Footer";
import { Outlet, useParams } from "react-router-dom";

const Home = () => {
  const { shouldDisplay, scrollHandler } = useDisplayOnScroll();

  const params = useParams();
  const isMainContentURLPathSetted = params["*"] === "";

  return (
    <>
      <NavigationBar container shouldDisplay={shouldDisplay} />
      <ParallaxContainer
        onScroll={scrollHandler}
        isMainContentURLPathSetted={isMainContentURLPathSetted}
      >
        <Outlet />
        <Footer />
      </ParallaxContainer>
    </>
  );
};

export default Home;
