import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: 
  "header"
  "content";

  > header {
    grid-area: header;

    height: 14.4rem;

    background: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding-left: 14.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -9.3rem auto 0;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }
`;

export const Form = styled.form`
  grid-area: content;

  width: 34rem;
      
  margin-top: 6.4rem;

  > div:nth-child(2),
    div:nth-child(4) {
    margin-bottom: 1.6rem;
  }
`;