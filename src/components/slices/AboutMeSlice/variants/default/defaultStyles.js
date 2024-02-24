import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  background-size: cover;
  height: min-content;
  margin: 1rem 0;
  align-items: center;

  div h4,
  div p {
    color: ${(props) => props.theme.colors.titleBrown};
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    margin: 0;
  }
  div h4 {
    font-size: 16px;
    font-weight: 700;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    div p {
      font-size: 16px;
      text-align: justify;
    }
    div h4 {
      font-size: 20px;
    }
  }
`;

export const ContainerImage = styled.div`
  max-width: 40%;
  height: auto;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
