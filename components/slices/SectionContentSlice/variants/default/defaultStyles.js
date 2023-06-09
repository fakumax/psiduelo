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
    flex-direction: column;
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
      max-width: 200px;
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

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;

  hr {
    border: 1px solid #7c5a19;
    width: 50%;
  }
`;

export const HeadTitle = styled.div`
  h2 {
    font-weight: 700;
    font-size: 20px;
  }
  .new1 {
    background-color: red;
  }
`;
