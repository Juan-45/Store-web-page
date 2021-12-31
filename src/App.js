import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import Home from "pages/Home";

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
