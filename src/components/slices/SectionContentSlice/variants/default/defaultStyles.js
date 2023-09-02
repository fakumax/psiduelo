import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.color};
  height: fit-content;
  flex-direction: column;
  height: fit-content;
  padding: 0;
  .ImageContainer {
    display: none;
  }
  .WrapperImage {
    width: 300px;
    height: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    .rightContainer {
      height: 100%;
      flex-direction: column;
      width: inherit;
      display: flex;
      justify-content: center;
      .ImageContainer {
        position: relative;
        width: 160px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          max-height: fit-content;
        }
      }
      .TextContainer {
        display: flex;
        flex-direction: column;
        gap: 30px;
        span {
          font-family: var(--font-hijrnotes);
          font-size: 24px;
        }
        p {
          text-align: justify;
          font-family: ${(props) => props.theme.typography.fontFamily_crimson};
        }
      }
    }
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px;

  &:last-child {
    flex-direction: row-reverse;
    text-align: end;
    h2,
    .TextContainer p {
      text-align: end;
    }
  }
`;

export const HeadTitle = styled.div`
  position: relative;
  h2 {
    font-weight: 400;
    font-size: 50px;
    margin: 0;
    font-family: var(--font-skeptisgraph);
  }
  .new1 {
    border: 1px solid #7c5a19;
    width: 50%;
  }
`;

export const LeftContainer = styled.aside`
  width: 100%;
  padding: 20px 0;
  background: white;
  .ImagePaper {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0;
    width: 45%;
    display: flex;
    position: relative;
    .ImagePaper {
      display: flex;
      height: 100%;
      position: absolute;
      right: -50px;
      img {
        width: auto;
        height: 100%;
        object-fit: cover;
        max-height: fit-content;
        background: linear-gradient(
          to right,
          white 0%,
          white 50%,
          transparent 50%,
          transparent 100%
        );
      }
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 30%;
  }
`;

export const WhiteContainer = styled.article`
  display: flex;
  flex-direction: column;
  place-content: center;
  background-color: white;
  text-align: justify;
  gap: 20px;
  a {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.titleBrown};
    font-family: var(--font-hijrnotes);
  }
  .ImageLeft {
    max-width: 150px;
    height: auto;
    display: flex;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: fit-content;
  }
  .TextLeft {
    padding: 0 20px;
    h2 {
      text-align: center;
      line-height: 35px;
      font-family: var(--font-skeptisgraph);
      font-size: 40px;
      font-weight: 400;
    }
    p {
      font-size: 16px;
      line-height: 20px;
      word-spacing: 2px;
      font-weight: 400;
      font-family: ${(props) => props.theme.typography.fontFamily_crimson};
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    .TextLeft {
      z-index: 1;
      gap: 25px;
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      h2 {
        margin: 0;
        font-size: 50px;
      }
      p {
        line-height: 35px;
      }
    }
    a {
      font-size: 20px;
    }
  }
`;
