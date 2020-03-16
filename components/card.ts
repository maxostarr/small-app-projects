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
}

const card = styled.div<CardProps>`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "grey"};
  border-radius: ${({ borderRadiusObject }) => {
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
    }
  }};
`;

export default card;
