import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 4rem 0;
  gap: 2rem;
  flex-direction: column;
  padding: 0 1rem;
  h1 {
    font-size: 30px;
  }
  h2,
  h1 {
    font-family: 'Crimson Text';
    text-align: center;
  }
  h3 {
    text-align: center;
  }
  p,
  li,
  h3 {
    font-family: 'Crimson Text';
  }

  p,
  li {
    font-size: 16px;
    text-align: justify;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 1rem;
    margin: 2rem 0;
    h1 {
      font-size: 24px;
    }
    h3,
    p,
    li {
      padding: 0 2rem;
    }
    p,
    li {
      font-size: 16px;
    }
  }
`;
