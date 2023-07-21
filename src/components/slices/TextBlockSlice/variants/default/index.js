import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './defaultStyles';

const Default = (slice) => {
  //console.log('--slice--TextBlockSlice', slice);

  return (
    <Wrapper>
      <Container>
        <PrismicRichText field={slice.primary.text} />
      </Container>
    </Wrapper>
  );
};

export { Default };
