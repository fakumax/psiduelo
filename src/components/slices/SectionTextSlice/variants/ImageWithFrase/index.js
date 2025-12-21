import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { ContainerImage, ContainerText, ContainerTitle, Wrapper } from './defaultStyles';

const ImageWithFrase = (slice) => {
  const { title, imagecentral, imageleft, imageright, textfirst } = slice.primary;

  return (
    <Wrapper>
      <ContainerTitle>
        <ContainerImage style={{ top: '0' }}>
          <PrismicNextImage
            field={imagecentral}
            width={imagecentral.dimensions.width}
            height={imagecentral.dimensions.height}
            fallbackAlt=""
          />
        </ContainerImage>
      </ContainerTitle>
      <ContainerText>
        <PrismicRichText field={textfirst} />
        <PrismicNextImage field={imageright} fallbackAlt="" />
      </ContainerText>
    </Wrapper>
  );
};

export { ImageWithFrase };
