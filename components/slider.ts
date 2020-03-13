import styled from "styled-components";

interface SliderProps {
  direction?: string;
  handleColor?: "primary" | "secondary" | "danger";
}

const slider = styled.input<SliderProps>`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 2px; /* Specified height */
  background: ${props => props.theme.colors.primary}; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  direction: ${props => (props.direction ? props.direction : "ltr")};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${props =>
      props.handleColor ? props.theme.colors[props.handleColor] : "#2f2f2f"};
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${props =>
      props.handleColor ? props.theme.colors[props.handleColor] : "#2f2f2f"};
    cursor: pointer;
  }
`;

export default slider;
