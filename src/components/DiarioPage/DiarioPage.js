import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';
import Image from 'next/image';
import { PrismicNextImage } from '@prismicio/next';

import {
  ArticleCard,
  ArticleDescription,
  ArticleTitle,
  ArticlesList,
  ContainerImage,
} from './defaultStyles';

const DiarioPage = ({ articles }) => {
  console.log('articles', articles);

  return (
    <>
      <ArticlesList>
        {articles.map((article) => {
          const defaultArt = article.data.slices.filter(
            (art) => art.variation === 'default',
          );
          const firmaArt = article.data.slices
            .filter((art) => art.variation === 'firma')
            .map((art) => art.primary.text);

          console.log('PRISMIC', defaultArt);
          console.log('PRISMIC', firmaArt);

          //   .map((slice) => slice.primary.text.map((textItem) => textItem.text).join(' '))
          //   .join(' ');

          return (
            <ArticleCard key={article.id}>
              <PrismicLink document={article}>
                <ContainerImage>
                  <PrismicNextImage
                    field={article.data.image}
                    alt={article.data.image.alt || 'Imagen de diario'}
                    width={article.data.image.dimensions.width}
                    height={article.data.image.dimensions.height}
                  />
                </ContainerImage>
              </PrismicLink>
              <div>
                <PrismicLink document={article}>
                  <ArticleTitle>
                    <PrismicText field={article.data.title} />
                  </ArticleTitle>
                </PrismicLink>
                {defaultArt.map((artItem, index) => (
                  <PrismicRichText key={index} field={artItem.primary.text} />
                ))}
              </div>
            </ArticleCard>
          );
        })}
      </ArticlesList>
    </>
  );
};

export default DiarioPage;
