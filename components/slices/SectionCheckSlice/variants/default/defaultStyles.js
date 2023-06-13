import { hexToRGBA } from '@/utils/hexToRGBA';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: fit-content;
    padding: 40px 0px;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => hexToRGBA(props.color, 0.6)};
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
    img {
      width: auto;
      max-height: 40px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    height: fit-content;
    padding: 40px 20px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    .subContainer {
      grid-template-columns: 1fr; /* Una columna en dispositivos móviles */
      gap: 20px;
    }
    .subItem {
      display: flex;
      gap: 10px;
    }
    .iconContainer {
      img {
        max-height: 20px;
      }
    }
  }
`;
