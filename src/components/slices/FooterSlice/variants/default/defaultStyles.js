import styled from 'styled-components';

export const Wrapper = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  background-repeat: no-repeat;
  div h4,
  div p {
    color: ${(props) => props.theme.colors.titleBrown};
    font-size: 20px;
    font-weight: 400;
    line-height: 2px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 30px 0;
  gap: 40px;

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
`;
