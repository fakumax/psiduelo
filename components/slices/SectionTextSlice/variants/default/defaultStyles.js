import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  color: rgba(219, 184, 179, 1);
  font-family: ${(props) => props.theme.typography.fontFamily_belle};
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  padding: 20px 0;
  max-height: 200px;
  height: 200px;
  background-color: beige;
  img {
    max-width: 40px;
    height: 100%;
  }
`;

export const FirstContainer = styled(motion.div)`
  opacity: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  gap: 1rem;
  /* display: ${(props) => (props.isVisible ? 'block' : 'none')}; */
  /* opacity: ${(props) => (props.isVisible ? 1 : 0)}; */
  /* animation: ${(props) => (props.isVisible ? 'block' : 'none')} 0.3s ease-in-out; */
`;

export const SecondContainer = styled(motion.div)`
  opacity: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  flex-direction: row-reverse;
  gap: 1rem;
  /* display: ${(props) => (props.isVisible ? 'block' : 'none')}; */
  /* opacity: ${(props) => (props.isVisible ? 1 : 0)}; */
  /* animation: ${(props) => (props.isVisible ? 'block' : 'none')} 0.3s ease-in-out; */
`;
export const Container = styled(motion.div)`
  h3 {
    font-size: 30px;
    font-weight: 500;
    max-width: 70%;
    line-height: 1.5;
    text-align: center;
  }
`;
