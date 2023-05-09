import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
 
  height: 5.7rem;

  border-radius: 1rem;
  border: none;

  
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 500;
  cursor: pointer;

  color: ${({ theme, exclude }) => exclude ? theme.COLORS.ROSE : theme.COLORS.BACKGROUND_600};
  background-color: ${({ theme, exclude }) => exclude ? theme.COLORS.BACKGROUND_900 : theme.COLORS.ROSE};

`;