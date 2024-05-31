import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem auto;
  h3 {
    font-family: var(--font-skeptisgraph);
    color: ${(props) => props.theme.colors.bgColorSecondary};
    text-align: center;
  }
  p {
    font-size: 16px;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    color: ${(props) => props.theme.colors.primary};
    text-align: justify;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
    margin: 4rem auto;
    gap: 2rem;
    flex-direction: column;
    h3 {
      margin-bottom: 2rem;
    }
  }
`;
