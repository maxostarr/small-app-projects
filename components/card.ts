import styled from "styled-components";

export type BorderRadiusObject = {
  borderTopLeft: [number, number];
  borderBottomLeft: [number, number];
  borderTopRight: [number, number];
  borderBottomRight: [number, number];
};

interface CardProps {
  width?: string;
  height?: string;
  borderRadiusObject?: BorderRadiusObject;
}

const card = styled.div<CardProps>`
  width: ${props => props.width || "100px"};
  height: ${props => props.height || "100px"};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${({ borderRadiusObject }) => {
    if (borderRadiusObject) {
      return `
      ${borderRadiusObject.borderTopLeft[0]}%
      ${borderRadiusObject.borderTopRight[0]}%
      ${borderRadiusObject.borderBottomRight[0]}%
      ${borderRadiusObject.borderBottomLeft[0]}%
      /
      ${borderRadiusObject.borderTopLeft[1]}%
      ${borderRadiusObject.borderTopRight[1]}%
      ${borderRadiusObject.borderBottomRight[1]}%
      ${borderRadiusObject.borderBottomLeft[1]}%
      `;
    }
  }};
`;

export default card;
