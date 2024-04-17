import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
  position: relative;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-size: cover;
  width: 100%;
  height: min-content;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  background-repeat: no-repeat;

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
  color: #7c5a19;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Frase = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f5f5f5;
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
    font-size: 16px;
    color: #7c5a19;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xs}) {
    gap: 1rem;
    height: 80px;
    place-content: center;
    align-items: center;
    p {
      text-align: left !important;
      font-family: ${(props) => props.theme.typography.fontFamily_belle};
    }
    span {
      text-align: right;
    }
  }
`;
