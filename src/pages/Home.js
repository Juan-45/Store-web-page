import Header from "./home/parallaxContainer/Header";
import ParallaxContainer from "./home/ParallaxContainer";
import MainContent from "./home/parallaxContainer/MainContent";
import NavBar from "./home/NavBar";
import useDisplayOnScroll from "hooks/useDisplayOnScroll";

const Home = () => {
  const { shouldDisplay, scrollHandler } = useDisplayOnScroll();
  return (
    <>
      <NavBar container shouldDisplay={shouldDisplay}>
        Sample text
      </NavBar>
      <ParallaxContainer onScroll={scrollHandler}>
        <Header />
        <MainContent />
      </ParallaxContainer>
    </>
  );
};

export default Home;
