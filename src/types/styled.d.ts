import "styled-components";

interface ColorVariants {
  main: string;
  light: string;
  dark: string;
}

interface ShadowVariants {
  main: string;
  light: string;
  lighter: string;
  dark: string;
  darker: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: ColorVariants;
      secondary: ColorVariants;
      error: ColorVariants;
      warning: ColorVariants;
      info: ColorVariants;
      success: ColorVariants;
      background: string;
      foreground: string;
      white: string;
      black: string;
    };
    fonts: string;
    shadow: ShadowVariants;
  }
}
