import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper } from './defaultStyles';

const Firma = (slice) => {
  const { text } = slice.primary;
  return (
    <Wrapper>
      <Container>
        <span>{text} </span>
      </Container>
    </Wrapper>
  );
};

export { Firma };
