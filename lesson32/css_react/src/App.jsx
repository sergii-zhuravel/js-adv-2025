import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "react-jss";

const theme = {
  colorPrimary: "green",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Footer />
      <Footer big />
    </ThemeProvider>
  );
}

export default App;
