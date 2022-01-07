import Header from "./home/Header";
import ParallaxContainer from "./home/ParallaxContainer";
import MainContent from "./home/MainContent";
import NavigationBar from "./home/NavigationBar";
import useDisplayOnScroll from "hooks/useDisplayOnScroll";

const Home = () => {
  const { shouldDisplay, scrollHandler } = useDisplayOnScroll();
  return (
    <>
      <NavigationBar container shouldDisplay={shouldDisplay} />
      <ParallaxContainer onScroll={scrollHandler}>
        <Header />
        <MainContent />
      </ParallaxContainer>
    </>
  );
};

export default Home;
