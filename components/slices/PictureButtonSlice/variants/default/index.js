import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button, Wrapper } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';
import Card from './Card';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { color } = slice.primary;
  console.log(color);
  console.log(slice.items);
  console.log(slice.id);
  return (
    <Wrapper color={color}>
      {slice.items.map((item) => (
        <Card items={item} cardStyle={item.cardStyle} key={item.id} />
      ))}
    </Wrapper>
  );
};

export { Default };
