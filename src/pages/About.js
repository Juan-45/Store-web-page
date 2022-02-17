import { Typography, Box } from "@mui/material";
import PageContainer from "components/PageContainer";
import frontStore from "images/front-store.jpg";
import PageTitle from "components/PageTitle";

const About = () => {
  return (
    <PageContainer>
      <Typography variant="h2" align="center" gutterBottom>
        Health Store
      </Typography>
      <Typography align="justify" sx={{ marginBottom: "40px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
        dapibus mauris eget maximus. Suspendisse potenti. Cras tristique, erat
        nec pharetra lobortis, erat urna bibendum erat, ac feugiat dolor tortor
        ac felis. Donec a gravida massa.
      </Typography>
      <Box sx={{ marginBottom: "40px" }}>
        <img
          src={frontStore}
          alt="store"
          style={{ filter: "sepia(30%)", width: "100%" }}
        />
      </Box>
      <PageTitle>Nuestra Historia</PageTitle>
      <Typography align="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
        dapibus mauris eget maximus. Suspendisse potenti. Cras tristique, erat
        nec pharetra lobortis, erat urna bibendum erat, ac feugiat dolor tortor
        ac felis. Donec a gravida massa. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Duis interdum dapibus mauris eget maximus. Suspendisse
        potenti. Cras tristique, erat nec pharetra lobortis, erat urna bibendum
        erat, ac feugiat dolor tortor ac felis. Donec a gravida massa.
      </Typography>
    </PageContainer>
  );
};

export default About;
