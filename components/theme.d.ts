import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    fontFamily: string;
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      light: string;
      dark: string;
    };
  }
}
