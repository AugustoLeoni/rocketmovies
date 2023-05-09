import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > .fromScrollBar::-webkit-scrollbar{
    width: 0.8rem;
  }

  > .fromScrollBar::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 0.8rem;
  }
`;

export const Form = styled.form`
  grid-area: content;
  overflow-y: auto;

  padding: 4rem 12.3rem;

  > header h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 2.4rem 0 4rem;
  }

  > div:nth-child(3) {
    display: flex;
    gap: 4rem;

    margin-bottom: 4rem;
  }

  > p {
    font-size: 2.0rem;
    line-height: 2.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin: 4rem 0 2.4rem;
  }

  > div:last-child{
    display: flex;
    gap: 4rem;

    div{
      width: 50%;
    }
  }
`;

export const Textarea = styled.textarea`
  padding: 1.9rem 1.6rem;
  gap: 0.8rem;

  width: 100%;
  height: 27.4rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;

  border: 0;

  resize: none;

  font-size: 1.6rem;
  line-height: 1.9rem;

  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;

export const Markers = styled.div`
  display: flex;
  gap: 2.4rem;

  padding: 1.6rem;

  width: 100%;
  height: 8.8rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 0.8rem;

  margin-bottom: 4rem;
`;