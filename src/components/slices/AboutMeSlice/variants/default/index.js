import { PrismicNextImage } from '@prismicio/next';
import { ContainerImage, TextContainer, Wrapper } from './defaultStyles';

const Default = (slice) => {
  const { title, description, image } = slice.primary;
  return (
    <Wrapper>
      <TextContainer>
        <h2>{title}</h2>
        <p>{description}</p>
      </TextContainer>
      <ContainerImage>
        <PrismicNextImage field={image} />
      </ContainerImage>
    </Wrapper>
  );
};

export { Default };
