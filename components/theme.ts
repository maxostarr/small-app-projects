import { createGlobalStyle, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  name: "Light",
  borderRadius: "5px",
  fontFamily: "Roboto",
  colors: {
    primary: "#ff0198",
    secondary: "#01c1d6",
    danger: "#eb238e",
    light: "#f4f4f4",
    dark: "#222"
  }
};

export default theme;

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: ${props => props.theme.fontFamily};
    width: 100vw;
    height: 100vh;
  }
  #root {
    padding: 1.5em;
    height: calc(100% - 3em);
  }
`;
