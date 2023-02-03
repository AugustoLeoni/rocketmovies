import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  height: 5.6rem;

  border-radius: 1rem;
  border: none;

  
  font-size: 1.6rem;
  line-height: 2.1rem;
  font-weight: 500;


  color: ${({ theme, exclude }) => exclude ? '#FF859B' : theme.COLORS.BACKGROUND_600};
  background-color: ${({ theme, exclude }) => exclude ? '#0D0C0F' : theme.COLORS.ROSE};

`;