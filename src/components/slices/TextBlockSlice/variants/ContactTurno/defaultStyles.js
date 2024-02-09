import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  place-content: center;
  background-color: ${(props) => props.theme.colors.bgjubilee};
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 4rem 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  background-color: ${(props) => props.theme.colors.bgjubilee};
  gap: 4rem;
  margin: 4rem 0;
  h3 {
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    text-align: center;
    font-size: 18px;
    margin-bottom: -25px;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    margin: 0;
    h3 {
      font-size: 24px;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: 0;
    h3 {
      font-size: 24px;
      margin: 0;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h3 {
      font-size: 28px;
      margin: 0;
    }
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
    height: 300px;
  }
`;
