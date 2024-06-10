import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  gap: 1rem;
  p,
  li {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Crimson Text';
    text-align: justify;
    color: ${(props) => props.theme.colors.primary};
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-skeptisgraph);
    color: ${(props) => props.theme.colors.primary};
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    line-height: 36px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1rem;
    margin: 2rem 0;
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    p,
    li {
      font-size: 16px;
      font-family: 'Crimson Text';
      text-align: justify;
    }
    h1,
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 44px;
    }
  }
`;
