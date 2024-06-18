import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 1200px;
    margin: 4rem auto 0rem;
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
  h3,
  h4 {
    font-family: var(--font-skeptisgraph);
    color: ${(props) => props.theme.colors.primary};
    font-size: 40px;
    font-weight: normal;
    text-align: center;
    line-height: 36px;
    margin: 0 0 1rem 0;
  }
  h4 {
    text-align: left;
    font-size: 36px;
    margin: 1rem 0;
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

export const Autor = styled.span`
  font-size: 16px;
  color: #9e9ea0;
  font-style: italic;
  text-align: end;
  margin: 0 20px;
`;
