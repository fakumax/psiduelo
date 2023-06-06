import styled from 'styled-components';

export const Component1 = styled.div`
  /* background-color: red; */
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  .ImageContainer {
    position: absolute;
    width: 70%;
    height: 92%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
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
  .container {
    display: flex;
    background-color: ${(props) => props.theme.colors.bgColorCream};
    height: 80%;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px 0;
  }
  .line1 {
    height: 25%;
    background-color: ${(props) => props.theme.colors.bgColorWhite};
    width: 100%;
  }
  .line2 {
    height: 25%;
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    h3 {
      color: #ceae80;
      opacity: 1 !important;
    }
  }
`;
export const Component2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .container {
    position: absolute;
    width: 80%;
    height: 72%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    h3 {
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      justify-content: center;
      display: flex;
      margin: 0;
      padding: 0;
      color: #ceae80;
    }
  }
  .line1 {
    background-color: ${(props) => props.theme.colors.bgColorCream};
    height: 65%;
  }
  .line2 {
    flex: 1;
    background-color: white;
  }
  .ImageContainer {
    position: relative;
    width: 80%;
    height: 100%;
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
`;
export const Component3 = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-color: ${(props) => props.theme.colors.bgColorCream};
  height: 100%;
  display: flex;
  justify-content: center;

  .container {
    border: 3px solid white;
    width: 80%;
    height: 90%;
    margin: auto;
  }
  .lines-1 {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: inherit;
    height: 100%;
    align-items: center;
    width: 100%;
  }
  .line0,
  .line1 {
    height: 1px;
    background: #ceae80;
    width: 10px;
    display: flex;
  }

  .lines-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    height: inherit;
  }
  .line2,
  .line3 {
    height: 30px;
    background: #ceae80;
    width: 1px;
    border: none;
    display: flex;
  }
  h3 {
    top: 0;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: fit-content;
    height: min-content;
    color: #ceae80;
  }
`;
export const Component4 = styled.div`
  height: 100%;
  display: flex;
  .firstSquare {
    background-color: ${(props) => props.theme.colors.bgColorCream};
    height: 100%;
    width: 35%;
  }
  .ImageContainer {
    width: 65%;
    background-color: red;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: fit-content;
    }
  }
  .secondSquare {
    position: absolute;
    background-color: ${(props) => props.theme.colors.bgColorWhite};
    top: 85px;
    background-color: #ffffff;
    left: 20px;
    height: 45%;
    width: 45%;
    h3 {
      top: 0;
      display: flex;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      width: fit-content;
      height: min-content;
      color: #ceae80;
    }
  }
`;
export const Component5 = styled.div`
  background-color: ${(props) => props.theme.colors.bgColorCream};
  height: 100%;
  display: flex;
  flex-direction: column;
  .ImageContainer {
    border: 20px solid white;
    width: 60%;
    height: 60%;
    margin: auto;
    align-content: center;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-height: fit-content;
    }
  }
  .lines-1 {
    position: absolute;
    height: 30px;
    background: #ceae80;
    width: 1px;
    border: none;
    display: flex;
  }
  .secondSquare {
    display: flex;
    justify-content: center;
    color: #ceae80;
    margin-bottom: 5px;
    h3 {
      margin: 0;
    }
  }
`;
export const Component6 = styled.div`
  background-color: red;
`;
export const Component7 = styled.div`
  background-color: red;
`;
export const Component8 = styled.div`
  background-color: red;
`;
export const Component9 = styled.div`
  background-color: red;
`;
