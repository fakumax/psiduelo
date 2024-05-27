import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: min-content;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div h4,
  div p {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
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
      font-size: 20px;
    }
    div h4 {
      font-size: 20px;
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 30px 0;
  gap: 40px;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 200px;
    height: auto;
    object-fit: cover;
    max-height: fit-content;
  }
`;

export const IconsGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 1rem 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Frase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.colors.bgColorLight2};
  width: 100%;
  height: 100px;
  place-content: center;
  align-items: center;
  p {
    text-align: center !important;
    font-family: ${(props) => props.theme.typography.fontFamily_belle};
    padding: 0 1rem;
  }
  span {
    font-family: ${(props) => props.theme.typography.fontFamily_belle};
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    height: 120px;
    place-content: center;
    align-items: center;
    margin-top: 2rem;
    p {
      text-align: left !important;
      font-family: ${(props) => props.theme.typography.fontFamily_belle};
    }
    span {
      text-align: right;
    }
  }
`;

export const ContainerImagePlant = styled.div`
  width: 45px;
  transform-origin: 50% 50%;
  transform: rotate(-72deg);
  position: absolute;
  display: flex;
  top: 60px;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  margin-top: 2rem;
`;
