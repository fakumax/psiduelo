import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  place-content: center;
  background-color: ${(props) => props.theme.colors.bgjubilee};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  background-color: white;
  margin: 4rem 0;
  gap: 4rem;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 100%;
    width: 80%;
    margin: 0 auto;
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

export const ContainerImageBorder = styled.div`
  width: 100%;
  position: relative;
  height: 25px;
  top: -17px;
  img {
    width: 100%;
    height: auto;
    position: absolute;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    display: flex;
    width: auto;
    height: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 45px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    height: 62px;
  }
`;
