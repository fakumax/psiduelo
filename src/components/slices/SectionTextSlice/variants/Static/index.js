import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './defaultStyles';

const Static = (slice) => {
  const { imageleft, imageright, textfirst, colorbg } = slice.primary;

  return (
    <Wrapper $colorbg={colorbg}>
      <Container>
        <PrismicNextImage field={imageleft} fallbackAlt="" />
        <PrismicRichText field={textfirst} />
        <PrismicNextImage field={imageright} fallbackAlt="" />
      </Container>
    </Wrapper>
  );
};

export { Static };
