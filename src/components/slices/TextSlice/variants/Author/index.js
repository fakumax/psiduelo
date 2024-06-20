import { PrismicRichText } from '@prismicio/react';
import { Container, Wrapper, Autor } from './defaultStyles';

const Author = (slice) => {
  const { text, author } = slice.primary;
  return (
    <Wrapper>
      <Container>
        <Autor>{author}</Autor>
        <PrismicRichText field={text} />
      </Container>
    </Wrapper>
  );
};

export { Author };
