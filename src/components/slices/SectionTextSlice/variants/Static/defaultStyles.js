import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${(props) => props.colorletter};
  background-color: ${(props) => props.bgcolor};
  font-family: ${(props) => props.theme.typography.fontFamily_belle};
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  max-height: 200px;
  height: 200px;
  align-items: center;
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
  /* display: ${(props) => (props.isVisible ? 'block' : 'none')}; */
  /* opacity: ${(props) => (props.isVisible ? 1 : 0)}; */
  /* animation: ${(props) => (props.isVisible ? 'block' : 'none')} 0.3s ease-in-out; */
`;

export const Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  margin: 0;

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
