import type { Preview, ReactRenderer } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyles from "../src/themes/globals";
import theme1 from "../src/themes/Theme1/theme";
import theme2 from "../src/themes/Theme2/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        theme1,
        theme2
      },
      defaultTheme: 'theme1',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyles,
    }),
  ]
};

export default preview;
