import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  console.log('--slice--', slice);
  const { image } = slice.primary;
  return (
    <div>
      <p>wara</p>
    </div>
  );
};

export { Default };
