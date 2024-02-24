import { PrismicNextImage } from '@prismicio/next';
import { ContainerImage, Wrapper } from './defaultStyles';

const Default = (slice) => {
  console.log('--slice--About', slice);
  const { title, description, image } = slice.primary;
  return (
    <Wrapper>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ContainerImage>
        <PrismicNextImage field={image} />
      </ContainerImage>
    </Wrapper>
  );
};

export { Default };
