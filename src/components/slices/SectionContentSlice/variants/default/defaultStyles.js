import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.color};
  height: fit-content;
  flex-direction: column;
  height: fit-content;
  padding: 0;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
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

  button,
  a {
    display: flex;
    place-self: center;
    color: #7c5a19;
    font-family: var(--font-hijrnotes);
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    font-weight: 600;
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
      //z-index: 1;
      gap: 25px;
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      h2 {
        margin: 0;
        font-size: 50px;
      }
      p {
        line-height: 30px;
      }
    }
    a {
      font-size: 20px;
    }
  }
`;

export const RightContainer = styled.div`
  height: fit-content;
  flex-direction: column;
  width: inherit;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  gap: 40px;

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
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
    width: inherit;
    display: flex;
    justify-content: center;
    gap: 20px;
    height: auto;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    gap: 40px;
  }
`;

export const ContainerItems = styled.article`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 40px;
  .WrapperImage {
    display: none;
  }
  button,
  a {
    display: flex;
    place-self: start;
    color: #7c5a19;
    font-family: var(--font-hijrnotes);
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    font-weight: 600;
    &:hover {
      background: -webkit-linear-gradient(
        left,
        #fbf8cc,
        #fde4cf,
        #ffcfd2,
        #f1c0e8,
        #cfbaf0,
        #a3c4f3,
        #90dbf4,
        #8eecf5,
        #98f5e1,
        #b9fbc0
      );

      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &:last-child {
    flex-direction: row-reverse;
    text-align: end;
    a {
      place-self: end;
    }
    h2 {
      text-align: end;
    }
    p {
      text-align: justify;
    }
    .new1 {
      right: 0;
      position: absolute;
      bottom: 0;
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0 55px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    gap: 70px;
    .WrapperImage {
      width: 300px;
      display: inherit;
    }
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
  }
`;
