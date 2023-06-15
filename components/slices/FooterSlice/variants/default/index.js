import { PrismicNextImage } from '@prismicio/next';
import { BackgroundImage, Button } from './defaultStyles';
import { PrismicRichText } from '@prismicio/react';

const Default = (slice) => {
  // console.log('--slice--', slice);
  return (
    <div>
      <PrismicNextImage field={slice.primary.image} />
      <PrismicRichText field={slice.primary.description} />

      {/* <>{item.columns}</>
      <>{item.text}</>
      <PrismicLink field={item.link}>Link</PrismicLink>
      <PrismicNextImage field={item.image} /> */}
    </div>
  );
};

export { Default };
