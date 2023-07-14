import styled, { keyframes } from 'styled-components';

export const WrapperCard = styled.div`
  background-color: #f4f3ef;
  height: 300px;
  width: 300px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add the drop shadow effect */

  .ImageContainer {
    /* background-color: aquamarine; */
    height: 94%;
    width: 94%;
    margin: auto;
  }
  img {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 1s ease;
    &:hover {
      opacity: 0.3;
    }
  }
`;

export const HoverText = styled.div`
  position: absolute;
  color: black;
  transition: opacity 0.3s ease;
  opacity: 0;
  visibility: hidden;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    font-family: 'Crimson Text';
  }
`;
