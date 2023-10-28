import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  margin: 4rem auto;
  gap: 2rem;
  flex-direction: column;
  h1 {
    font-size: 30px;
  }
  h2,
  h1 {
    font-family: 'Crimson Text';
    text-align: center;
  }
  p,
  li {
    font-size: 16px;
    font-family: 'Crimson Text';
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 1rem;
    margin: 2rem 0;
    h1 {
      font-size: 20px;
    }
    p,
    li {
      font-size: 12px;
      padding: 0 2rem;
    }
  }
`;
