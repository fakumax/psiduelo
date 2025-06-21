import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  90%, 100% {
    background-size: 100% 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${fadeIn} 0.2s ease-out;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Loader = styled.div`
  width: 20px;
  aspect-ratio: 1;
  background: linear-gradient(#dc1818 0 0) bottom/100% 0% no-repeat #ccc;
  mask: radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right,
    linear-gradient(to bottom left, #000 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, #000 42%, #0000 43%) bottom right;
  -webkit-mask: radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left,
    radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right,
    linear-gradient(to bottom left, #000 42%, #0000 43%) bottom left,
    linear-gradient(to bottom right, #000 42%, #0000 43%) bottom right;
  mask-size: 50% 50%;
  -webkit-mask-size: 50% 50%;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  animation: ${loadingAnimation} 2s infinite linear;
`;

const LoadingText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

const Loading = () => {
  return (
    <LoaderOverlay>
      <LoaderContainer>
        <Loader />
        <LoadingText>Cargando...</LoadingText>
      </LoaderContainer>
    </LoaderOverlay>
  );
};

export { Loading };
