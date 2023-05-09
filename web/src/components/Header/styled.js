import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 3rem 12.3rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKEGROUND_500};

  > h1{
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > div:nth-child(3) {
    display: flex;
    gap: 0.9rem;
    div {
      width: 12.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    span {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;
    }

    button {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;

      color: ${({ theme }) => theme.COLORS.GRAY_200};

      background-color: transparent;
      border: 0;
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }
  }
  
`;