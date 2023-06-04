import styled from 'styled-components';
import { Container } from '../../../SectionTextSlice/variants/default/defaultStyles';

export const Component1 = styled.div`
  background-color: red;
  height: 100%;
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
      color: transparent;
      width: 100%;
      height: 100%;
      max-width: inherit;
      margin: 0;
      padding: 0;
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
  background-color: blue;
`;
export const Component3 = styled.div`
  background-color: red;
`;
export const Component4 = styled.div`
  background-color: red;
`;
export const Component5 = styled.div`
  background-color: red;
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
