import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto auto;
  grid-template-areas:
  "header"
  "section"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > div:nth-child(2) {
    grid-area: section;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5rem 12.3rem 3.8rem;

    h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
    }

    a {
      width: 20.7rem;
    }

  }

  > .list::-webkit-scrollbar{
    width: 0.8rem;

  }

  > .list::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 0.8rem;
  }
`;

export const Movies = styled.div`
  grid-area: content;
  overflow-y: auto;

  padding-right: 0.8rem ;
  margin: 0 12.3rem 5.9rem;
`;