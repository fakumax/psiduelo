import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { imageleft, imageright, text } = slice.primary;
  return (
    <div>
      <PrismicRichText field={text} />
    </div>
  );
};

export { Default };
