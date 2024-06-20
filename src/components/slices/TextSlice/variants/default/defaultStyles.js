import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 1200px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  h3,
  h4 {
    font-family: var(--font-skeptisgraph);
    color: ${(props) => props.theme.colors.primary};
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    line-height: 36px;
    margin: 2rem 0;
  }
  h4 {
    text-align: left;
    font-size: 32px;
    margin: 0 0 2rem 0;
  }
  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p {
    text-indent: 2em;
  }
  p + h4 {
    margin: 2rem 0 1rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
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
