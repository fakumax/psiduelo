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
  //gap: 4rem;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 100%;
    width: 80%;
    margin: 0 auto;
    gap: 0;
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

export const ContainerImageBorderUp = styled.div`
  width: 100%;
  position: relative;
  height: 40px;
  top: -30px;
  img {
    width: 100%;
    height: auto;
    position: absolute;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    top: -40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 45px;
    top: -50px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    top: -70px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    top: -80px;
  }
`;
export const ContainerImageBorderDown = styled.div`
  width: 100%;
  position: relative;
  top: 30px;
  transform: rotate(0.5turn);
  img {
    width: 100%;
    height: auto;
    position: absolute;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    display: flex;
    width: auto;
    top: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    top: 40px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 45px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 50px;
    top: 60px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    position: relative;
    top: 80px;
  }
`;
