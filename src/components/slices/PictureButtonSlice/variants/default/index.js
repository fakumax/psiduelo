import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button, Container, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';
import Card from './Card';

const Default = (slice) => {
  const { color } = slice.primary;
  return (
    <Wrapper>
      <Container color={color}>
        {slice.items.map((item) => (
          <Card items={item} cardStyle={item.cardStyle} key={item.id} />
        ))}
      </Container>
    </Wrapper>
  );
};

export { Default };
