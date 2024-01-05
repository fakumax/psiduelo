import { hexToRGBA } from '@/utils/hexToRGBA';
import styled from 'styled-components';

export const Wrapper = styled.section`
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

export const Container = styled.div`
  background-color: ${(props) => hexToRGBA(props.color, 0.6)};
  width: 80%;
  display: flex;
  margin: 40px auto;
  flex-direction: column;
  gap: 20px;
  padding: 25px;
  h2 {
    text-align: center;
    font-family: var(--font-skeptisgraph);
    font-weight: 400;
    font-size: 50px;
    margin: 1rem 0;
    letter-spacing: 4px;
  }

  .subContainer {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    /* button {
      border: none;
      background: none;
      padding: 0;
      margin: 0;
    } */
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    .subContainer {
      grid-template-columns: repeat(2, 1fr); // Dos columnas
    }
  }
`;

export const SubItem = styled.button`
  align-content: flex-start;
  margin: 20px 0;
  padding: 20px;
  width: auto;
  min-height: 200px;
  display: grid;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  border: none;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
    cursor: pointer;
  }

  h3 {
    color: ${(props) => props.theme.colors.titleBrown};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    padding-bottom: 1rem;
  }
  p {
    line-height: 2;
    font-size: 12px;
    text-align: justify;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 450px;
    margin: 20px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: auto;
    margin: 20px;
  }

  .titleItems {
    align-items: center;
    display: flex;
    justify-content: center;
    img {
      width: auto;
      max-height: 15px;
    }
    h3 {
      margin: 0;
      font-size: 20px;
    }
  }
`;
