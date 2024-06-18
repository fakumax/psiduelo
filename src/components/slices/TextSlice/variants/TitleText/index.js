import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './defaultStyles';

const TitleText = (slice) => {
  console.log('--slice--TextSlice', slice);
  const { title, text } = slice.primary;

  return (
    <Wrapper>
      <Container>
        <PrismicRichText field={title} />
        <PrismicRichText field={text} />
      </Container>
    </Wrapper>
  );
};

export { TitleText };
