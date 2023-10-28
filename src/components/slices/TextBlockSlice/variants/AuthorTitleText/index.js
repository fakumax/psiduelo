import { PrismicRichText } from '@prismicio/react';
import { Author, Container, Wrapper } from './defaultStyles';

const AuthorTitleText = (slice) => {
  //console.log('--slice--TextBlockSlice--AuthorTitleText', slice);
  const { title, text, author } = slice.primary;
  //console.log('author', author);

  return (
    <Wrapper>
      <Container>
        <Author>{author}</Author>
        <PrismicRichText field={title} />
        <PrismicRichText field={text} />
      </Container>
    </Wrapper>
  );
};

export { AuthorTitleText };
