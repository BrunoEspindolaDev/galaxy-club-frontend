import { color, extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Ubuntu",
    heading: "Poppins",
    mono: "Menlo, monospace",
  },
  colors: {
    purple: {
      50: "#f0e9ff",
      100: "#cec0f5",
      200: "#a997e8",
      300: "#836ede",
      400: "#6944d3",
      500: "#5644d3",
      600: "#4c2191",
      700: "#3c1869",
      800: "#270d40",
      900: "#12041b",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          rounded: "full",
          _hover: {
            bg: "whiteAlpha.100",
          },
          _active: {
            bg: "whiteAlpha.100",
          },
        },
      },
    },
  },
});

export default theme;
