import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 100%;
  padding: 0 2rem;
  background-size: cover;
  height: min-content;
  margin: 4rem 0;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 40% 40%;
    place-content: center;
    div p {
      font-size: 16px;
      text-align: justify;
    }
    div h4 {
      font-size: 20px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: var(--font-skeptisgraph);
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    margin: 0px;
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    margin: 0;
    margin-top: 5rem;
    text-indent: 40px;
  }
  > div {
    margin: 0;
    display: flex;
    position: relative;
    align-content: start;
    place-content: center;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h2 {
      font-size: 60px;
    }
  }
`;
export const ContainerImage = styled.div`
  height: auto;
  max-height: 550px;
  max-width: 550px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ContainerImagePlant = styled.div`
  width: 45px;
  transform-origin: 50% 50%;
  transform: rotate(-72deg);
  position: absolute;
  display: flex;
  top: -20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
