import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 22.3rem;

    background: rgba(255, 133, 155, 0.05);
    border-radius: 1.6rem;

    padding: 3.2rem;
    margin-bottom: 2.4rem;
    cursor: pointer;

    > h3 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;

      color: ${({ theme }) => theme.COLORS.GRAY_300};

      margin-top: 1.5rem;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; 
    }
`;

export const Tags = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_100};

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 0.8rem;

  padding: 0.5rem 1.6rem;

  margin-right: 0.8rem;
  margin-top: 2.2rem;
`;