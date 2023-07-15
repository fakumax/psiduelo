import styled from 'styled-components';

export const WrapperCard = styled.div`
  background-color: #f4f3ef;
  height: 300px;
  width: 300px;
  display: flex;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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
    color: #7c5a19;
    font-size: 40px;
    line-height: 40px;
  }
`;
