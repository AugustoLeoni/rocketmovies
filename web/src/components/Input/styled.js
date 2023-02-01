import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 1rem;

  margin-bottom: 0.8rem;
  padding-left: 1.6rem;

  > input {
    height: 5.6rem;
    width: 100%;

    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;