import styled from "styled-components";

interface InputProps {
  fontSize?: string;
}

const input = styled.input<InputProps>`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.colors.primary};
  font-size: ${props => props.fontSize};
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

export default input;
