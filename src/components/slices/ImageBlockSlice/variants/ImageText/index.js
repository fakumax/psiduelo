import { PrismicNextImage } from '@prismicio/next';
import { ContainerImage, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const ImageText = (slice) => {
  const { image, title } = slice.primary;
  return (
    <Wrapper>
      <ContainerImage>
        <PrismicRichText field={title} />
        <PrismicNextImage field={image} />
      </ContainerImage>
    </Wrapper>
  );
};

export { ImageText };
