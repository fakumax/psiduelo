import styled from 'styled-components';

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ArticleCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin: 2rem 0;
`;

export const ContainerImage = styled.div`
  img {
    aspect-ratio: 16/9;
    max-width: 400px;
    height: auto;
    object-fit: contain;
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
