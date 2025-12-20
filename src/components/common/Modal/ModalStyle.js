import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-family: var(--font-skeptisgraph);
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(180, 150, 120, 0.12);
    line-height: 1.15;
  }

  p {
    font-size: 0.85rem;
    line-height: 1.75;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    color: ${(props) => props.theme.colors.primary};
    text-align: left;
    margin-bottom: 0.3rem;
    opacity: 0.85;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h3 {
      font-size: 2rem;
      margin-bottom: 0.6rem;
    }
    
    p {
      font-size: 0.9rem;
      line-height: 1.85;
    }
  }
`;
