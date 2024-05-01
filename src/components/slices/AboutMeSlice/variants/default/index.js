import { PrismicNextImage } from '@prismicio/next';
import {
  ContainerImage,
  TextContainer,
  Wrapper,
  ContainerImagePlant,
} from './defaultStyles';

const Default = (slice) => {
  console.log('Slice', slice);
  const { title, description, image, imageplant } = slice.primary;
  return (
    <Wrapper>
      <TextContainer>
        <h2>{title}</h2>
        <div>
          <ContainerImagePlant>
            <PrismicNextImage field={imageplant} />
          </ContainerImagePlant>
          <p>{description}</p>
        </div>
      </TextContainer>
      <ContainerImage>
        <PrismicNextImage field={image} />
      </ContainerImage>
    </Wrapper>
  );
};

export { Default };
