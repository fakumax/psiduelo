import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${(props) => props.color};
  height: fit-content;
  /* padding: 4rem 0; */
  ///////////////////

  ///////////////
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    height: fit-content;
    padding: 0;
    .ImageContainer {
      display: none;
    }
  }
  .WrapperImage {
    width: 300px;
    height: 100%;
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

export const LeftContainer = styled.div`
  /* height: 100%; */
  width: 30%;
  /* background-color: red; */
  display: flex;
  .ImagePaper {
    display: flex;
    height: 100%;
    justify-content: end;
    position: relative;
    width: inherit;
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
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding: 20px 0;
    background: white;
    .ImagePaper {
      display: none;
    }
  }
`;

export const WhiteContainer = styled.div`
  position: relative;
  height: 100%;
  background-color: white;
  text-align: justify;
  padding: 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  place-content: center;
  a {
    font-family: var(--font-hijrnotes);
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding: 0;
  }
  .ImageLeft {
    max-width: 150px;
    height: auto;
    display: flex;
    margin: 1rem auto;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: fit-content;
  }
  .TextLeft {
    h2 {
      width: 100%;
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
  .ButtonLeft {
    display: flex;
    place-content: center;
  }
`;
