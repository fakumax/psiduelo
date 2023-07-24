import { PrismicNextImage } from '@prismicio/next';
import { ContainerImage, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const ImageParagraph = (slice) => {
  console.log('--slice--ImageBlockSlice', slice);
  const { image, subtitle } = slice.primary;
  return (
    <Wrapper>
      <ContainerImage>
        <PrismicNextImage field={image} />
        <PrismicRichText field={subtitle} />
      </ContainerImage>
    </Wrapper>
  );
};

export { ImageParagraph };
