import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  color: ${(props) => props.theme.colors.textTertiary};
  background-color: ${(props) => props.theme.colors.bgColorCoral};
  // background-color: #f5f5f5;
  font-family: ${(props) => props.theme.typography.fontFamily_belle};
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  height: 150px;
  align-items: center;
  img {
    max-width: 40px;
    height: 100%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    height: 200px;
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
  h3 {
    font-size: 16px;
    font-weight: 500;
    padding: 0rem 2rem;
    line-height: 1.5;
    text-align: center;
    display: flex;
    margin: 0;
  }
  img {
    position: absolute;
    width: 30px;
    height: auto;
  }
  .imageleft {
    left: 0px;
    top: 5px;
  }
  .imageright {
    right: 10px;
    bottom: 0;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h3 {
      font-size: 24px;
    }
    img {
      position: relative;
      width: 30px;
      height: auto;
      object-fit: contain;
    }
    .imageleft {
      left: 0px;
      top: 15px;
    }
    .imageright {
      right: 20px;
      bottom: 0;
    }
  }
`;
