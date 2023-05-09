import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.4rem 0 16.1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;


  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};

    font-size: 4.8rem;
    line-height: 6.3rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY};

    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
  }

  > h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;

    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }

  > div:nth-child(6) {
    margin-top: 1.6rem;

  }
  
  > a {
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.ROSE};
    
    margin-top: 4.2rem;

    text-align: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;