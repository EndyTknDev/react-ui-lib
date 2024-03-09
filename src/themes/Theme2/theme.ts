import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: "#b94881",
      dark: "#a8457a",
      light: "#bd5a93",
    },
    secondary: {
      main: "#427353",
      dark: "#34563b",
      light: "#4b835f",
    },
    success: {
      main: "#00E676",
      dark: "#00C853",
      light: "#69F0AE",
    },
    warning: {
      main: "#FFEA00",
      dark: "#FFD600",
      light: "#FFFF00",
    },
    error: {
      main: "#FF1744",
      dark: "#D50000",
      light: "#FF5252",
    },
    info: {
      main: "#00B0FF",
      dark: "#0091EA",
      light: "#40C4FF",
    },
    background: "white",
    foreground: "white",
    black: "#0c0c0c",
    white: "white",
  },
  fonts: "inter",
  shadow: {
    main: "0px 0px 4px 4px",
    light: "0px 0px 4px 4px",
    lighter: "0px 0px 4px 4px",
    dark: "0px 0px 4px 4px",
    darker: "0px 0px 4px 4px",
  },
};

export default theme;
