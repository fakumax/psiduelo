import styled from 'styled-components';

export const SectionList = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const ArticleCard = styled.article`
  display: flex;
  height: auto;
  align-items: center;
  flex-direction: column-reverse;
  gap: 2rem;
  margin: 2rem 0;
  &:first-child {
    margin-top: 0;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 30% 50%;
    margin: 2rem 0;
    height: 300px;
    place-content: center;
  }
`;

export const ContainerRight = styled.div`
  overflow: hidden;
  padding: 0 2rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
    line-height: 20px;
  }
  h2 {
    color: ${(props) => props.theme.colors.primary};
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
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    align-self: flex-start;
  }
`;

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  margin-top: 2rem;
  text-align: center;
  position: relative;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 2rem auto;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  margin: 1rem 1rem 0 1rem;

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-family: var(--font-skeptisgraph);
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 1rem;
    line-height: 30px;
  }
  p {
    color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 2rem auto;
    h3 {
      font-size: 50px;
      line-height: 24px;
    }
  }
`;

export const ContainerImagePersonal = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;

export const ArticleTitle = styled.h2`
  margin: 0;
  color: #333;
  text-decoration: none;
  font-family: var(--font-skeptisgraph);
  font-size: 40px;
  font-weight: 400;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 50px;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 16px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainerImagePlant = styled.div`
  width: 30px;
  transform-origin: 50% 50%;
  transform: rotate(-72deg);
  position: relative;
  display: flex;
  align-self: center;
  bottom: 0px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: 100%;
    position: absolute;
  }
`;
