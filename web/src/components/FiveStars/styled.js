import styled from "styled-components";

export const Container = styled.div`
  > svg {
    width: 1.2rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-right: 0.6rem;

    margin-top: 0.8rem;
  }

  .full-star {
  fill: ${({ theme }) => theme.COLORS.ROSE};
  }
`;