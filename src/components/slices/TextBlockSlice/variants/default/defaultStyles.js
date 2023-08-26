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
  h2 {
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
    p,
    li {
      font-size: 12px;
      padding: 0 2rem;
    }
  }
`;
