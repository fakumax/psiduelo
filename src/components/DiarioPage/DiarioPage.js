import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';
import Image from 'next/image';
import { PrismicNextImage } from '@prismicio/next';

import {
  ArticleCard,
  ArticleDescription,
  ArticleTitle,
  SectionList,
  ContainerImage,
  ContainerRight,
} from './defaultStyles';

const DiarioPage = ({ articles }) => {
  console.log('articles', articles);

  return (
    <>
      <SectionList>
        {articles.map((article) => {
          const shortArt = article.data.slices.filter(
            (art) => art.variation === 'shortTextDiario',
          );
          const firmaArt = article.data.slices
            .filter((art) => art.variation === 'firma')
            .map((art) => art.primary.text);

          console.log('PRISMIC', shortArt);
          console.log('PRISMIC', firmaArt);

          //   .map((slice) => slice.primary.text.map((textItem) => textItem.text).join(' '))
          //   .join(' ');

          return (
            <ArticleCard key={article.id}>
              <div>
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
              </div>
              <ContainerRight>
                <PrismicLink document={article}>
                  <ArticleTitle>
                    <PrismicText field={article.data.title} />
                  </ArticleTitle>
                </PrismicLink>
                {shortArt.map((artItem, index) => (
                  <PrismicRichText key={index} field={artItem.primary.text} />
                ))}
              </ContainerRight>
            </ArticleCard>
          );
        })}
      </SectionList>
    </>
  );
};

export default DiarioPage;
