// 1. Import the extendTheme function
import { extendTheme, ThemeOverride } from "@chakra-ui/react";

const themeRed: ThemeOverride = {
  colors: {
    brand: {
      200: "#F2F2F2",
      300: "#AEBF2A",
      400: "#9AA644",
      500: "#64732F",
      600: "#536122",
      700: "#4A4D4D",
      800: "#383838",
      900: "#222"
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Oswald, sans-serif",
    body: "Balsanmiq Sans, sans-serif",
  },
  styles: {
    global: {
      body: {},
    },
  },
};

export default extendTheme(themeRed);
