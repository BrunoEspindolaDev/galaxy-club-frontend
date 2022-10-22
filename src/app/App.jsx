import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import theme from "theme";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Router />
        <CSSReset />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
