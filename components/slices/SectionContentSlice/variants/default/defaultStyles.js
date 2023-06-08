import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  background-color: ${(props) => props.color};
  .leftContainer {
    height: 100%;
    width: 20%;
    background-color: red;
  }
  .rightContainer {
    height: 100%;
    background-color: blue;
    width: inherit;
    display: flex;
    .ImageContainer {
      position: relative;
      width: 60%;
      max-height: 200px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: fit-content;
      }
    }
    .TextContainer {
      display: flex;
      flex-direction: column;
    }
  }
`;
