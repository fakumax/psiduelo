import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background-color: blue; */
  padding: 20px 0;
`;

export const Container = styled.div`
  width: fit-content;
  margin: auto;
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.color};
  display: grid;
  /* grid-auto-flow: row dense; */
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
