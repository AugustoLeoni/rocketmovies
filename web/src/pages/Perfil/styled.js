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

    div:nth-child(1) {
      position: relative;
    }

    img {
      width: 18.6rem;
      border-radius: 50%;

      margin-top: -9.3rem;
    }

  }
`;

export const Svg = styled.button`
  position: absolute;
  top: 4rem;
  right: 0.8rem;

  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border-radius: 50%;
  border: 0;
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