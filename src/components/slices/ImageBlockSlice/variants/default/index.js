import { PrismicNextImage } from '@prismicio/next';
import { ContainerImage, Wrapper } from './defaultStyles';

const Default = (slice) => {
  const { image } = slice.primary;
  return (
    <Wrapper>
      <ContainerImage>
        <PrismicNextImage field={image} />
      </ContainerImage>
    </Wrapper>
  );
};

export { Default };
