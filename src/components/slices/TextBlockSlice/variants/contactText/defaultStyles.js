import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 40% 50%;
  }
`;

export const ContainerImage = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    display: flex;
    width: auto;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
