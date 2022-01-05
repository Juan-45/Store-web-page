import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import Home from "pages/Home";

//TODO set min width for large screen and no-effects for smartphone screens
//TODO comprobar layout en laptop
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
