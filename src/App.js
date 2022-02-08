import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import Home from "pages/Home";
import MainContent from "pages/home/MainContent";
import Contact from "pages/Contact";
import About from "pages/About";
import SignUp from "pages/SignUp";
import StorePickUp from "pages/StorePickUp";
import Products from "pages/Products";
import { Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//TODO comprobar layout en laptop
//TODO set all imports from MUI to {}
//TODO Store-web-page should be /home
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ color: "white" }}
      >

        <BrowserRouter>
          <Routes>
            <Route path="/Store-web-page" element={<Home />}>
              <Route path="" element={<MainContent />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="about" element={<About />} />
              <Route path="storepickup" element={<StorePickUp />} />
              <Route path="products" element={<Products />} />
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
      </Grid>
    </ThemeProvider>
  );
}

export default App;
