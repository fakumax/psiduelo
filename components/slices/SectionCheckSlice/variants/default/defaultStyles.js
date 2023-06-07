import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

export const Container = styled.div`
  background-color: ${(props) => props.color};
  width: 80%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: auto;
  height: 60vh;
  flex-direction: column;
  .subContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;
