import { PrismicNextImage } from '@prismicio/next';
import { ContainerImage, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const ImageParagraph = (slice) => {
  const { image, subtitle } = slice.primary;
  return (
    <Wrapper>
      <ContainerImage>
        <PrismicNextImage field={image} fallbackAlt="" />
        <PrismicRichText field={subtitle} />
      </ContainerImage>
    </Wrapper>
  );
};

export { ImageParagraph };
