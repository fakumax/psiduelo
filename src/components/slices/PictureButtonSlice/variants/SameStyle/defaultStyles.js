import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 0rem;
`;

export const Container = styled.div`
  display: grid;
  width: fit-content;
  margin: auto;
  object-fit: contain;
  background-color: ${(props) => props.color};
  gap: 30px;
  justify-items: center;
  grid-template-columns: 1fr;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
