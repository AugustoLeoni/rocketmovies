import styled from "styled-components";

export const Container = styled.div`
  height: 5.6rem;

  font-size: 1.6rem;
  line-height: 1.9rem;

  color: ${({ theme }) => theme.COLORS.WHITE_000};
  background-color: ${({ theme, isActive }) => isActive ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border-radius: 1rem;

  padding: 0 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.6rem;

  border: ${({ theme, isActive }) => isActive ? '2px dashed #948F99' : 'none'};
`;

export const IconButton = styled.button`
  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
`;