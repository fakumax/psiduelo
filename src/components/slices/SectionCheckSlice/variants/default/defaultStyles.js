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
    font-size: 40px;
    margin: 0;
  }

  .subContainer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .subItem {
    display: flex;
    gap: 20px;
  }

  /* @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    height: fit-content;
    padding: 40px 20px;
  } */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    .subContainer {
      grid-template-columns: repeat(2, 1fr); // Dos columnas
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

export const SubItem = styled.article`
  h3 {
    color: ${(props) => props.theme.colors.titleBrown};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  }
  p {
    line-height: 1.5;
    font-size: 12px;
    text-align: justify;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
  }
  .titleItems {
    align-items: center;
    display: flex;
    gap: 20px;
    padding: 10px 0;
    img {
      width: auto;
      max-height: 15px;
    }
    h3 {
      margin: 0;
    }
  }
`;
