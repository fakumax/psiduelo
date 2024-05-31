import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  justify-content: end;
  span {
    padding-right: 2rem;
    color: ${(props) => props.theme.colors.bgColorSecondary};
    font-family: var(--font-skeptisgraph);
    font-size: 25px;
    font-weight: 400;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    justify-content: end;
    span {
      font-size: 35px;
    }
  }
`;
