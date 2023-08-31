import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  place-content: center;
  height: fit-content;
  padding: 1rem 0;
  p,
  a {
    font-size: 8px;
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    color: ${(props) => props.theme.colors.titleBrown};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    p,
    a {
      font-size: 12px;
    }
  }

  .heart-icon {
    /* Pulse Heart */
    color: #ef1b55;
    -webkit-animation-name: pulse-heart;
    animation-name: pulse-heart;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  @-webkit-keyframes pulse-heart {
    0% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes pulse-heart {
    0% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    100% {
      -webkit-transform: scale(1);
      webkit-transform: scale(1);
    }
  }
`;
