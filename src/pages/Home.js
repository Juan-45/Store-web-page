import ParallaxContainer from "./home/ParallaxContainer";
import NavigationBar from "./home/NavigationBar";
import useDisplayOnScroll from "hooks/useDisplayOnScroll";
import Footer from "./home/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { shouldDisplay, scrollHandler } = useDisplayOnScroll();
  return (
    <>
      <NavigationBar container shouldDisplay={shouldDisplay} />
      <ParallaxContainer onScroll={scrollHandler}>
        <Outlet />
        <Footer />
      </ParallaxContainer>
    </>
  );
};

export default Home;
