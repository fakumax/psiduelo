import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${(props) => props.colorletter};
  background-color: ${(props) => props.theme.colors.bgjubilee};
  font-family: ${(props) => props.theme.typography.fontFamily_belle};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 16px;
    margin: 2rem;
    font-weight: 400;
    text-align: center;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row-reverse;
    display: grid;
    grid-template-columns: 50% 50%; /* Crea dos columnas, cada una con el 50% del ancho */
    grid-gap: 10px;
    h3 {
      order: 2;
    }
  }
`;
export const ContainerImage = styled(motion.div)`
  height: auto;
  order: 1;

  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    place-self: flex-end;
    max-width: 250px;
  }
`;

export const Transition = styled(motion.div)`
  opacity: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  gap: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
    align-content: center;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;

  h3 {
    font-size: 30px;
    font-weight: 500;
    max-width: 70%;
    line-height: 1.5;
    text-align: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    h3 {
      font-size: 16px;
      max-width: 80%;
    }
  }
`;
