import PageContainer from "components/PageContainer";
import frontStore from "images/front-store.jpg";
import GenericTitle from "components/GenericTitle";
import {
  CompanyDescription,
  CompanyHistory,
  CompanyName,
  PhotoContainer,
} from "./aboutUs/CustomComponents";

const AboutUs = () => {
  return (
    <PageContainer>
      <CompanyName>Health Store</CompanyName>
      <CompanyDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
        dapibus mauris eget maximus. Suspendisse potenti. Cras tristique, erat
        nec pharetra lobortis, erat urna bibendum erat, ac feugiat dolor tortor
        ac felis. Donec a gravida massa.
      </CompanyDescription>
      <PhotoContainer src={frontStore} />
      <GenericTitle>Nuestra Historia</GenericTitle>
      <CompanyHistory>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
        dapibus mauris eget maximus. Suspendisse potenti. Cras tristique, erat
        nec pharetra lobortis, erat urna bibendum erat, ac feugiat dolor tortor
        ac felis. Donec a gravida massa. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis interdum dapibus mauris eget maximus. Suspendisse
        potenti. Cras tristique, erat nec pharetra lobortis, erat urna bibendum
        erat, ac feugiat dolor tortor ac felis. Donec a gravida massa.
      </CompanyHistory>
    </PageContainer>
  );
};

export default AboutUs;
