import { hexToRGBA } from '@/utils/hexToRGBA';
import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(2deg); }
`;

const floatAnimation2 = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-2deg); }
`;

export const Wrapper = styled.section`
  object-fit: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  overflow: hidden;
  min-height: 520px;
`;

export const DecoImage = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  
  &.flower {
    width: 100px;
    height: auto;
    top: 2%;
    left: 1%;
    opacity: 0.3;
    animation: ${floatAnimation} 7s ease-in-out infinite;
  }
  
  &.flower2 {
    width: 180px;
    height: auto;
    bottom: 3%;
    right: 2%;
    opacity: 0.55;
    transform: scaleX(-1) rotate(10deg);
    animation: ${floatAnimation2} 9s ease-in-out infinite;
  }
  
  &.bunny {
    width: 50px;
    height: auto;
    bottom: 15%;
    right: 3%;
    opacity: 0.18;
    animation: ${floatAnimation2} 8s ease-in-out infinite;
  }
  
  &.door {
    width: 40px;
    height: auto;
    bottom: 5%;
    left: 4%;
    opacity: 0.18;
    animation: ${floatAnimation} 10s ease-in-out infinite;
  }
  
  &.splatter1 {
    width: 400px;
    height: auto;
    top: -5%;
    right: -5%;
    opacity: 0.45;
  }
  
  &.splatter2 {
    width: 350px;
    height: auto;
    bottom: -8%;
    left: -5%;
    opacity: 0.4;
    transform: rotate(180deg);
  }
  
  &.splatter3 {
    width: 280px;
    height: auto;
    top: 35%;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    opacity: 0.25;
  }
  
  @media (max-width: 768px) {
    &.flower, &.flower2, &.bunny, &.door {
      display: none;
    }
    &.splatter1, &.splatter2, &.splatter3 {
      opacity: 0.25;
      width: 180px;
    }
  }
`;

export const Container = styled.div`
  background-color: ${(props) => hexToRGBA(props.color, 0.15)};
  width: 95%;
  max-width: 950px;
  display: flex;
  margin: 2rem auto;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  position: relative;
  z-index: 2;

  h2 {
    text-align: center;
    font-family: var(--font-skeptisgraph);
    font-weight: 400;
    font-size: 2.25rem;
    margin: 0.5rem 0 1.25rem;
    color: ${(props) => props.theme.colors.primary};
    line-height: 1.2;
  }

  .subContainer {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    gap: 0.5rem;
    width: 100%;
    max-width: 850px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 2rem;
    
    h2 {
      font-size: 2.8rem;
      margin: 0.5rem 0 1.5rem;
    }
    
    .subContainer {
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    }
  }
`;

export const SubItem = styled.button`
  align-content: flex-start;
  margin: 0.6rem;
  padding: 1rem 1.25rem;
  width: auto;
  min-height: 9rem;
  max-height: 12rem;
  overflow: hidden;
  display: grid;
  border-radius: 2px;
  border: none;
  position: relative;
  transition: all 0.3s ease;
  text-align: left;

  box-shadow: 
    0 1px 2px rgba(0,0,0,0.04),
    0 2px 4px rgba(0,0,0,0.03);

  /* Cinta adhesiva */
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 16px;
    border-radius: 1px;
    z-index: 2;
  }

  /* Card 1 - Crema cálido */
  &:nth-child(1) {
    background: linear-gradient(145deg, #faf6f0 0%, #f5efe5 100%);
    transform: rotate(-1deg);
    
    &::before {
      background: linear-gradient(135deg, rgba(175, 145, 105, 0.55) 0%, rgba(190, 163, 125, 0.4) 100%);
      transform: translateX(-50%) rotate(2deg);
    }
  }

  /* Card 2 - Rosa pálido */
  &:nth-child(2) {
    background: linear-gradient(145deg, #fdf8f6 0%, #f9f0ec 100%);
    transform: rotate(0.7deg);
    
    &::before {
      background: linear-gradient(135deg, rgba(190, 150, 140, 0.5) 0%, rgba(200, 165, 155, 0.35) 100%);
      width: 55px;
      transform: translateX(-50%) rotate(-1deg);
    }
  }

  /* Card 3 - Verde muy suave */
  &:nth-child(3) {
    background: linear-gradient(145deg, #f7f9f5 0%, #f1f5ed 100%);
    transform: rotate(0.4deg);
    
    &::before {
      background: linear-gradient(135deg, rgba(145, 160, 125, 0.45) 0%, rgba(160, 175, 140, 0.3) 100%);
      width: 45px;
      left: 45%;
      transform: translateX(-50%) rotate(2deg);
    }
  }

  /* Card 4 - Lavanda suave */
  &:nth-child(4) {
    background: linear-gradient(145deg, #f8f7fb 0%, #f3f0f7 100%);
    transform: rotate(-0.5deg);
    
    &::before {
      background: linear-gradient(135deg, rgba(160, 150, 175, 0.45) 0%, rgba(175, 165, 190, 0.3) 100%);
      width: 52px;
      transform: translateX(-50%) rotate(-2deg);
    }
  }

  &:hover {
    box-shadow: 
      0 3px 6px rgba(0,0,0,0.06),
      0 6px 12px rgba(0,0,0,0.04);
    transform: scale(1.012) rotate(0deg) translateY(-2px);
    cursor: pointer;
    z-index: 10;
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    padding-bottom: 0.3rem;
    line-height: 1.3;
  }

  p {
    line-height: 1.5;
    font-size: 0.78rem;
    text-align: left;
    font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.75;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
    word-spacing: -0.5px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    width: auto;
    max-width: 20rem;
    margin: 0.75rem auto;
    padding: 1.25rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: auto;
    max-width: none;
    margin: 0.75rem;
    padding: 1.25rem;
    min-height: 10rem;
    max-height: 11.5rem;

    &:nth-child(1) { transform: rotate(-1.2deg) translateY(4px); }
    &:nth-child(2) { transform: rotate(0.8deg) translateY(-2px); }
    &:nth-child(3) { transform: rotate(0.6deg) translateY(6px); }
    &:nth-child(4) { transform: rotate(-0.8deg) translateY(-4px); }
  }

  .titleItems {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0.2rem 0 0.5rem;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid rgba(180, 140, 100, 0.1);

    img {
      width: auto;
      max-height: 0.9rem;
    }

    h3 {
      margin: 0;
      font-family: var(--font-skeptisgraph);
      font-size: 1.85rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.primary};
      padding-bottom: 0;
      line-height: 1.1;
    }
  }
`;
