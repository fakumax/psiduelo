import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  background-color: ${(props) => props.color};
  ///////////////////
  .leftContainer {
    height: 100%;
    width: 20%;
    background-color: red;
  }
  .ImageLeft {
    display: flex;
    height: 100%;
    justify-content: end;
    img {
      width: auto;
      height: 100%;
      object-fit: cover;
      max-height: fit-content;
    }
  }

  ///////////////
  .rightContainer {
    height: 100%;
    flex-direction: column;
    width: inherit;
    display: flex;
    justify-content: center;
    .ImageContainer {
      position: relative;

      width: 100%;
      max-width: 160px;
      max-height: 200px;
      height: 100%;
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
      gap: 30px;
      span {
        font-family: var(--font-hijrnotes);
        font-size: 24px;
      }
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
`;

export const HeadTitle = styled.div`
  h2 {
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }
  .new1 {
    border: 1px solid #7c5a19;
    width: 50%;
  }
`;
