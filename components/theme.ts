import { createGlobalStyle } from "styled-components";

const theme = {
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
    margin: 1.5em;
    font-family: ${props => props.theme.fontFamily};
  }
`;
