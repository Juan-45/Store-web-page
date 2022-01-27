import Header from "./home/Header";
import ParallaxContainer from "./home/ParallaxContainer";
import MainContent from "./home/MainContent";
import NavigationBar from "./home/NavigationBar";
import useDisplayOnScroll from "hooks/useDisplayOnScroll";
import Footer from "./home/Footer";

const Home = () => {
  const { shouldDisplay, scrollHandler } = useDisplayOnScroll();
  return (
    <>
      <NavigationBar container shouldDisplay={shouldDisplay} />
      <ParallaxContainer onScroll={scrollHandler}>
        <Header />
        <MainContent />
        <Footer />
      </ParallaxContainer>
    </>
  );
};

export default Home;
