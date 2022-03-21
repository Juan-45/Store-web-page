import PageContainer from "components/PageContainer";

const Container = ({ children }) => (
  <PageContainer
    sx={{ paddingTop: { xs: "150px", sm: "230px" } }}
    xs={11}
    md={10}
    lg={9}
    xl={8}
  >
    {children}
  </PageContainer>
);

export default Container;
