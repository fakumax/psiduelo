import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${(props) => props.colorletter};
  background-color: ${(props) => props.bgColor};
  font-family: ${(props) => props.theme.typography.fontFamily_belle};
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  max-height: 200px;
  height: 150px;
  align-items: center;
  margin: 1rem 0;
  img {
    max-width: 40px;
    height: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100px;
    max-height: 150px;
    padding: 10px 0;
    img {
      max-width: 30px;
    }
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

export const Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  margin: 0;

  h3 {
    font-size: 16px;
    max-width: 70%;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h3 {
      font-size: 24px;
      max-width: 70%;
    }
  }
`;
