import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
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
  h4 {
    text-align: center;
    font-size: 20px;
    font-family: 'Crimson Text';
  }
`;
