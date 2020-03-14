import styled from "styled-components";

interface GridContainerProps {
  width?: string;
  height?: string;
}

export const GridContainer = styled.div<GridContainerProps>`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  display: grid;
  grid-template-columns: repeat(5, calc(${props => props.width} / 5));
  grid-template-rows: repeat(5, calc(${props => props.height} / 5));
  align-items: stretch;
  justify-items: stretch;
`;

interface GridItemProps {
  gridColumn: string;
  gridRow: string;
  align?: string;
  justify?: string;
  padding?: string;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  align-self: ${props => (props.align ? props.align : "stretch")};
  justify-self: ${props => (props.justify ? props.justify : "stretch")};
  padding: ${props => (props.padding ? props.padding : "0")};
`;
