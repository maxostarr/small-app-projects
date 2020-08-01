import styled from "styled-components";

interface BoxProps {
  justifyContent?: string;
  alignContent?: string;
  alignItems?: string;
  height?: string;
}

export default styled.div<BoxProps>`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : `center`};
  align-content: ${({ alignContent }) =>
    alignContent ? alignContent : `center`};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : `center`)};
  height: ${({ height }) => (height ? height : `100%`)};
`;
