import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > .list::-webkit-scrollbar{
    width: 0.8rem;

  }

  > .list::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 0.8rem;
  }

`;

export const Section = styled.section`
  grid-area: content;
  overflow-y: auto;

  margin: 4rem 12.3rem;
  padding-right: 2rem;

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-top: 2.4rem;
      margin-bottom: 2.4rem;
    }

    svg {
      height: 100%;
      width: 20px;
    }
  }

  > div:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    img {
      width: 1.6rem;
      height: 1.6rem;

      border-radius: 50%;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.9rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg {
      fill: ${({ theme }) => theme.COLORS.ROSE}
    }
  }

  > div:nth-child(4) {
    display: flex;
    gap: 0.8rem;

    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    p {

      font-size: 1.6rem;
      line-height: 2.1rem;
      
      text-align: justify;
      
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Tags = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_100};

  background: ${({ theme }) => theme.COLORS.BROWN};
  border-radius: 0.8rem;

  padding: 0.8rem 1.6rem;
  
`;