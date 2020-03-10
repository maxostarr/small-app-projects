import styled from "styled-components";

export default styled.button`
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.primary};
`;
