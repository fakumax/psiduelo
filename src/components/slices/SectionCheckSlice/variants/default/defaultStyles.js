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
  margin: 2.5rem auto;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  h2 {
    text-align: center;
    font-family: var(--font-skeptisgraph);
    font-weight: 400;
    font-size: 2.75rem;
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.primary};
  }

  .subContainer {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    .subContainer {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const SubItem = styled.button`
  background-color: #fdfaf6;
  align-content: flex-start;
  margin: 1.25rem 0;
  padding: 1.25rem;
  width: auto;
  min-height: 12.5rem;
  display: grid;
  border-radius: 0.6rem;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  border: none;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
    cursor: pointer;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    padding-bottom: 1rem;
  }
  p {
    line-height: 2;
    font-size: 1rem;
    text-align: justify;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 28rem;
    margin: 1.25rem;
    padding: 2rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: auto;
    margin: 1.25rem;
    padding: 2rem;
  }

  .titleItems {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    img {
      width: auto;
      max-height: 1rem;
    }
    h3 {
      margin: 0;
      font-family: var(--font-skeptisgraph);
      font-size: 2.25rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
