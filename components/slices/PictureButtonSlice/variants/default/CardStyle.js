import styled from 'styled-components';
import Hero from '../../../../../slices/Hero/index';

export const WrapperCard = styled.div`
  background-color: #f4f3ef;
  height: 200px;
  width: 200px;
  img {
    width: auto;
    max-height: 100px;
  }
`;

export const ContainerCard = styled.div`
  background-color: yellowgreen;
  width: 100%;
  height: 100%;
  /* Estilos específicos para componentes con un ID específico */
  ${({ id }) =>
    id === '1' &&
    `
      background-color: red;
    `}

  /* Estilos específicos para componentes con un ID específico */
  ${({ id }) =>
    id === '2' &&
    `
      background-color: green;
    `}
   /* Estilos específicos para componentes con un ID específico */
  ${({ id }) =>
    id === '3' &&
    `
      background-color: yellow;
    `}
   /* Estilos específicos para componentes con un ID específico */
  ${({ id }) =>
    id === '4' &&
    `
      background-color: blue;
      height: 300px;
    `}
`;
