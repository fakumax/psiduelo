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
    place-content:center;
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
  gap: 2rem;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: var(--font-skeptisgraph);
    font-size: 50px;
    font-weight: 400;
    text-align: center;
  }
  p {
    color: ${(props) => props.theme.colors.titleBrown};
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    margin: 0;
  }
  @media(min-width: ${(props) => props.theme.breakpoints.md}){
    h2{
      font-size:60px
    }
  }
`;
export const ContainerImage = styled.div`
  height: auto;
  max-height:450px;
  max-width:450px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
