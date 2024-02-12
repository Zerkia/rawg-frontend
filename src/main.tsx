import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
<<<<<<< HEAD
      <ColorModeScript initialColorMode={theme.initialColorMode} />
=======
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
>>>>>>> c76e0e7886a311e438a7950b5b40d71db6e23cde
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
