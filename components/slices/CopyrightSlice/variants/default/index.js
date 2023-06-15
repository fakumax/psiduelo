import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button } from './defaultStyles';
import { PrismicLink, PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  // console.log('--slice--', slice);
  return (
    <div>
      <p>{slice.primary.text}</p>
      <PrismicLink field={slice.primary.link}>Link</PrismicLink>
    </div>
  );
};

export { Default };
