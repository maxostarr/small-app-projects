import styled from "styled-components";

export type BorderRadiusObject = {
  [topLeft: string]: { a: number; b: number };
  bottomLeft: { a: number; b: number };
  topRight: { a: number; b: number };
  bottomRight: { a: number; b: number };
};

interface CardProps {
  width?: string;
  height?: string;
  borderRadiusObject?: BorderRadiusObject;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  clickable?: boolean;
  circle?: boolean;
}

const card = styled.div<CardProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.secondary};
  border-radius: ${({ borderRadiusObject, circle }) => {
    if (borderRadiusObject) {
      return `
      ${borderRadiusObject.topLeft.a}%
      ${borderRadiusObject.topRight.a}%
      ${borderRadiusObject.bottomRight.a}%
      ${borderRadiusObject.bottomLeft.a}%
      /
      ${borderRadiusObject.topLeft.b}%
      ${borderRadiusObject.topRight.b}%
      ${borderRadiusObject.bottomRight.b}%
      ${borderRadiusObject.bottomLeft.b}%
      `;
    } else if (circle) {
      return `50%`;
    }
  }};
  /* Hack to lighten color. Only works on Hex values. I would never use this for real */
  &:active {
    background-color: ${(props) => {
      if (props.clickable) {
        const color = props.backgroundColor
          ? props.backgroundColor
          : props.theme.colors.secondary;
        return `${color}cc`;
      }
    }};
  }
`;

export default card;
