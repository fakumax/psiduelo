import styled from 'styled-components';

export const SectionList = styled.section`
  display: flex;
  gap: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ArticleCard = styled.article`
  display: grid;
  grid-template-columns: 30% 50%;
  margin: 2rem 0;
  height: 300px;
  place-content: center;
`;

export const ContainerRight = styled.div`
  overflow: hidden;
  padding: 0 2rem;
  text-align: justify;
`;

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  margin: 2rem auto;
  text-align: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  width: auto;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  }
`;

export const ArticleTitle = styled.h2`
  margin: 0;
  color: #333;
  font-size: 24px;
  text-decoration: none;

  a {
    color: inherit; /* Ensure links are the same color as titles */
    text-decoration: none;
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
