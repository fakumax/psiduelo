import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';

import {
  ArticleCard,
  ArticleTitle,
  ContainerFoto,
  ContainerImage,
  ContainerImagePersonal,
  ContainerRight,
  SectionList,
  Description,
  ContainerImagePlant,
} from './defaultStyles';

const DiarioPage = ({ articles }) => {
  const optionsDiario = articles.filter(
    (article) => article.data.options === 'articuloDiario',
  );

  const optionsFoto = articles
    .filter((article) => article.data.options === 'articuloFoto')
    .map((article) => {
      const { title, subtitle, subtitle2, imagecentral, imageplant } =
        article.data.slices[0].primary;
      return { title, subtitle, subtitle2, imagecentral, imageplant };
    })[0];

  return (
    <>
      <ContainerFoto>
        <ContainerImagePersonal>
          <PrismicNextImage
            field={optionsFoto.imagecentral}
            alt={optionsFoto.imagecentral.alt || 'Imagen psicóloga'}
            width={optionsFoto.imagecentral.dimensions.width}
            height={optionsFoto.imagecentral.dimensions.height}
            priority={true}
          />
        </ContainerImagePersonal>
        <Description>
          <h3>{optionsFoto.title}</h3>
          <p>{optionsFoto.subtitle}</p>
          <p>{optionsFoto.subtitle2}</p>
        </Description>
        <ContainerImagePlant>
          <PrismicNextImage field={optionsFoto.imageplant} />
        </ContainerImagePlant>
      </ContainerFoto>
      <SectionList>
        {optionsDiario.map((article) => {
          const shortArt = article.data.slices.filter(
            (art) => art.variation === 'shortTextDiario',
          );
          const firmaArt = article.data.slices
            .filter((art) => art.variation === 'firma')
            .map((art) => art.primary.text);

          return (
            <ArticleCard key={article.id}>
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
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
