import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './defaultStyles';

const Default = (slice) => {
  console.log('--slice--TextSlice', slice);
  const { text } = slice.primary;
  return (
    <Wrapper>
      <Container>
        <PrismicRichText field={text} />
      </Container>
    </Wrapper>
  );
};

export { Default };
