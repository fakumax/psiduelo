import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  place-items: center;
`;
export const WrapperCard = styled.div`
  background-color: #f4f3ef;
  height: 300px;
  width: 300px;
  display: flex;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* -webkit-box-shadow: -20px 18px 27px -1px rgba(143, 143, 143, 1);
  -moz-box-shadow: -20px 18px 27px -1px rgba(143, 143, 143, 1);
  box-shadow: -20px 18px 27px -1px rgba(143, 143, 143, 1); */

  .ImageContainer {
    height: 94%;
    width: 94%;
    margin: auto;
  }
  img {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  a {
    display: flex;
    place-content: center;
    place-items: center;
    &:hover {
      div {
        opacity: 1;
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export const HoverText = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    position: absolute;
    color: black;
    opacity: 0;
    transition: opacity 0.3s ease-in;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    place-content: center;
    place-items: center;
    h3 {
      text-align: center;
      font-family: var(--font-skeptisgraph);
      font-weight: 500;
      padding: 30px;
      color: ${(props) => props.theme.colors.titleBrown};
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

export const TextTitle = styled.div`
  text-align: center;
  padding: 1.5rem 1.5rem 0rem 1.5rem;
  h3 {
    font-family: var(--font-skeptisgraph);
    font-weight: 500;
    color: ${(props) => props.theme.colors.titleBrown};
    font-size: 30px;
    word-wrap: break-word;
    text-align: center;
    line-height: 30px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`;
