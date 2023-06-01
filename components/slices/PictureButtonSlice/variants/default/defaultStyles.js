import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  height: 300px;
  margin: auto;
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.color};
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
`;
