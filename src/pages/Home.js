import ParallaxContainer from "./home/ParallaxContainer";
import NavigationBar from "./home/NavigationBar";
import useDisplayOnScroll from "hooks/useDisplayOnScroll";
import Footer from "./home/Footer";
import { Outlet, useParams } from "react-router-dom";
import useScrollbar from "hooks/useScrollbar";

const Home = () => {
  const { shouldDisplay, shouldRemove, scrollHandler } = useDisplayOnScroll();
  const { ref, scrollbarWidth } = useScrollbar();
  const params = useParams();
  const isMainContentURLPathSetted = params["*"] === "";

  return (
    <>
      <NavigationBar
        container
        shouldDisplay={shouldDisplay}
        shouldRemove={shouldRemove}
        scrollbarWidth={scrollbarWidth}
      />
      <ParallaxContainer
        onScroll={scrollHandler}
        isMainContentURLPathSetted={isMainContentURLPathSetted}
        ref={ref}
      >
        <Outlet />
        <Footer />
      </ParallaxContainer>
    </>
  );
};

export default Home;
