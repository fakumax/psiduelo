import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  90%, 100% {
    background-size: 100% 100%;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajusta según tus necesidades para ocupar toda la altura de la pantalla */
`;

const Loader = styled.div`
  width: 20px;
  aspect-ratio: 1;
  background: linear-gradient(#dc1818 0 0) bottom/100% 0% no-repeat #ccc;
  -webkit-mask:
    radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right,
    linear-gradient(to bottom left, #000 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, #000 42%, #0000 43%) bottom right;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
  animation: ${loadingAnimation} 2s infinite linear;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export { Loading };
