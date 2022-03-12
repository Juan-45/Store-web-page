import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import Home from "pages/Home";
import MainContent from "pages/home/MainContent";
import Contact from "pages/Contact";
import AboutUs from "pages/AboutUs";
import SignUp from "pages/SignUp";
import StorePicker from "pages/StorePicker";
import Products from "pages/Products";
import Container from "app/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//TODO comprobar layout en laptop
//TODO set all imports from MUI to {}
//TODO Store-web-page should be /home

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="Store-web-page/*" element={<Home />}>
              <Route path="" element={<MainContent />} />
              <Route path="contacto" element={<Contact />} />
              <Route path="cuenta" element={<SignUp />} />
              <Route path="sobreNosotros" element={<AboutUs />} />
              <Route path="sucursales" element={<StorePicker />} />
              <Route path="productos/*" element={<Products />} />
              <Route
                path="*"
                element={
                  <div
                    style={{
                      paddingTop: "300px",
                      height: "100vh",
                      background: "gray",
                    }}
                  >
                    <h1>PAGE NOT FOUND</h1>
                  </div>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
