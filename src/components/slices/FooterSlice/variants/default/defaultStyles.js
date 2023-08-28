import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
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
    font-size: 16px;
    font-weight: 400;
    line-height: 2px;
    text-align: center;
  }
  div h4 {
    font-size: 20px;
    font-weight: 700;
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
    gap: 10px;
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
  div {
    display: flex;
    gap: 40px;
    justify-content: center;
    padding: 1rem 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    div {
      gap: 20px;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: #7c5a19;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 20px;
  }
`;
