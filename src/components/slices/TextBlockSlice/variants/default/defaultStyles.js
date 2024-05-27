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
  h1 {
    font-family: var(--font-skeptisgraph);
    color: ${(props) => props.theme.colors.primary};
    font-size: 50px;
    font-weight: normal;
    text-align: center;
  }
  h3 {
    text-align: center;
    padding: 1rem 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 1rem;
    margin: 2rem 0;

    p,
    li {
      font-size: 12px;
      padding: 0 2rem;
    }
    h1 {
      font-size: 40px;
      padding: 0 1rem;
      line-height: 40px;
    }
  }
`;
