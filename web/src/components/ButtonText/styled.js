import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: 0;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 400;
    
    }
`;