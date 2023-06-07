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
  align-content: center;
  align-self: center;
  margin: auto;

  height: 60vh;
  flex-direction: column;
  padding: 0 40px;
  justify-content: space-evenly;
  .subContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr); // Dos columnas
    gap: 10px;
  }
  @media (max-width: 767px) {
    .subContainer {
      grid-template-columns: 1fr; /* Una columna en dispositivos móviles */
    }
  }
  h2 {
    text-align: center;
  }
  .subItem {
    display: flex;
    gap: 20px;
  }
  .iconContainer {
    align-items: center;
    display: flex;
    height: 100%;
    max-width: 50px;
  }
`;
