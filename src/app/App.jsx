import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import theme from "theme";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ChakraProvider theme={theme}>
        <Router />
        <CSSReset />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
