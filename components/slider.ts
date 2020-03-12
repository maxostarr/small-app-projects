import styled from "styled-components";

interface SliderProps {
  direction?: string;
}

const slider = styled.input<SliderProps>`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 2px; /* Specified height */
  background: ${props => props.theme.colors.primary}; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
  direction: ${props => props.direction};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #2f2f2f;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #2f2f2f;
    cursor: pointer;
  }
`;

export default slider;
