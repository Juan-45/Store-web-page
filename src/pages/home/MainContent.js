import ContentContainer from "./mainContent/relevantProducts/ContentContainer";
import PresentationContainer from "./mainContent/PresentationContainer";
import PresentationItem from "./mainContent/PresentationItem";
import ParallaxBackground from "./ParallaxBackground";
import RelevantProducts from "./mainContent/RelevantProducts";
import Header from "./Header";
import nuts from "images/nuts.jpg";
import driedFruits from "images/driedFruits.jpg";

const MainContent = () => {
  return (
    <>
      <Header />
      <ContentContainer img={nuts}>
        <PresentationContainer>
          <PresentationItem
            title="Lorem ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum dapibus mauris eget maximus. Suspendisse potenti. Cras
              tristique, erat nec pharetra lobortis, erat urna bibendum erat, ac
              feugiat dolor tortor ac felis. Donec a gravida massa."
          />
        </PresentationContainer>
      </ContentContainer>
      <ContentContainer justifyContent="flex-end" img={driedFruits}>
        <PresentationContainer>
          <PresentationItem
            title="Lorem ipsum"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum dapibus mauris eget maximus. Suspendisse potenti. Cras
              tristique, erat nec pharetra lobortis, erat urna bibendum erat, ac
              feugiat dolor tortor ac felis. Donec a gravida massa."
          />
        </PresentationContainer>
      </ContentContainer>
      <ParallaxBackground sx={{ top: "270vh" }} />
      <RelevantProducts />
    </>
  );
};

export default MainContent;
