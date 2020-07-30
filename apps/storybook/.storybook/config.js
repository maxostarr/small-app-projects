import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import theme from "components/theme";
const themes = [theme, theme];
addDecorator(withThemesProvider(themes));
